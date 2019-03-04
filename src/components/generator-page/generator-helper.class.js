import mustache from "mustache";
import FileSaver from "file-saver";
import {kumuluzEEVersionsList} from "../../content/generator-page/export.data";
import {testingExtensionDependencies} from "../../content/generator-page/extensions";

export class GeneratorHelper {

    // utility functions
    static initializeDollarFunction() {
        return {
            id: (elemId) => {
                return document.getElementById(elemId);
            },
            query: (selector) => {
                return document.querySelectorAll(selector);
            },
            checked: (elemId) => {
                return document.getElementById(elemId).checked;
            },
            val: (elemId) => {
                return document.getElementById(elemId).value;
            },
            byName: (elemName) => {
                return document.getElementsByName(elemName);
            }
        };
    }

    // end utility

    // versions calc
    static versionIsLarger(version1, version2) {
        let v1 = version1.split(".");
        let v2 = version2.split(".");

        if (v1[0] > v2[0]) return true;
        if (v1[0] < v2[0]) return false;

        if (v1[1] > v2[1]) return true;
        if (v1[1] < v2[1]) return false;

        v1 = v1[2].split("-");
        v2 = v2[2].split("-");

        if (v1[0] > v2[0]) return true;
        if (v1[0] < v2[0]) return false;

        if (v1[0] > v2[0]) return true;
        if (v1[0] < v2[0]) return false;

        if (v1.length >= 2 && v2.length === 1) {
            return true;
        }
        if (v2.length >= 2 && v1.length === 1) {
            return false;
        }
        if (v1.length >= 2 && v2.length >= 2) {
            if (v1[1].toUpperCase() === "SNAPSHOT" && v2[1].toUpperCase() === "BETA") return true;
            if (v1[1].toUpperCase() === "BETA" && v2[1].toUpperCase() === "SNAPSHOT") return false;
        }
        return false;
    }

    static versionIsSmaller(version1, version2) {
        if (version1.toUpperCase() === version2.toUpperCase()) return false;
        if (version1 !== "*" && version2 === "*") {
            return true;
        }
        return !GeneratorHelper.versionIsLarger(version1, version2);
    }

    static versionIsSmallerOrEqual(version1, version2) {
        return version1.toUpperCase() === version2.toUpperCase() || GeneratorHelper.versionIsSmaller(version1, version2);
    }

    static versionIsLargerOrEqual(version1, version2) {
        return version1.toUpperCase() === version2.toUpperCase() || GeneratorHelper.versionIsLarger(version1, version2);
    }

    static getLatestLogsVersion() {
        const URL = "https://api.github.com/repos/kumuluz/kumuluzee-logs/releases";
        const req = new XMLHttpRequest();
        req.open("GET", URL, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load", (e) => {
            const data = JSON.parse(e.target.response);
            GeneratorHelper.LOGS_RELEASE = data.map(rel => rel.name.substring(1)).find(rel => !rel.prerelease);
        });
        req.addEventListener("error", (res) => {
            // eslint-disable-next-line no-console
            console.error(res);
        });
        req.send();
    }

    // end versions calc

    // functions for parsing given data
    static getValueFromItem(item, version) {
        const labels = item.labels;
        labels.sort((n1, n2) => {
            if (GeneratorHelper.versionIsLarger(n1.minVersion, n2.minVersion)) {
                return -1;
            }
            if (GeneratorHelper.versionIsSmaller(n1.minVersion, n2.minVersion)) {
                return 1;
            }
            return 0;
        });

        for (let label of labels) {
            if (GeneratorHelper.versionIsLargerOrEqual(version, label.minVersion)) {
                return label;
            }
        }
        return "FALSE - PREVERI";
    }

    static parseValue(value) {
        if (value === "n/a") {
            return null;
        }
        const splitted = value.split(":");
        if (splitted.length === 2) {
            return {
                groupId: splitted[0],
                artifactId: splitted[1]
            };
        } else if (splitted.length === 3) {
            return {
                groupId: splitted[0],
                artifactId: splitted[1],
                version: splitted[2]
            };
        } else if (splitted.length === 4) {
            return {
                groupId: splitted[0],
                artifactId: splitted[1],
                versionKey: splitted[2],
                version: splitted[3]
            };
        } else {
            throw new Error("Check behaviour, something is wrong: " + JSON.stringify(splitted));
        }
    }

    // end parsing functions

    // helper functions
    static _parseComponents(kumuluzeeVersion, microprofileDeps) {
        const components = Array.from(document.getElementsByName("components"));
        const selectedComponents = components.filter(component => component.checked);
        const parsedComponents = [];

        if (microprofileDeps.length === 0) {
            parsedComponents.push({
                groupId: "com.kumuluz.ee",
                artifactId: "kumuluzee-core"
            });
        }

        selectedComponents.forEach(component => {
            if (!microprofileDeps.includes(component.id)) {
                const label = GeneratorHelper.getValueFromItem(component.dataObject, kumuluzeeVersion);
                parsedComponents.push(GeneratorHelper.parseValue(label.value));
            }
        });
        return parsedComponents;
    }

    static _parseMicroprofiles(kumuluzeeVersion) {
        const microprofiles = Array.from(document.getElementsByName("microprofile"));
        const selectedMicroprofile = microprofiles.find(mp => mp.checked);
        if (selectedMicroprofile) {
            const label = GeneratorHelper.getValueFromItem(selectedMicroprofile.dataObject, kumuluzeeVersion);
            return {
                mp: selectedMicroprofile.dataObject.dependencies,
                value: GeneratorHelper.parseValue(label.value)
            };
        }
        return null;
    }

    static _parseExtensions(kumuluzeeVersion, microprofileDeps) {
        const $ = GeneratorHelper.initializeDollarFunction();
        const parsedExtensions = [];
        const versions = [];

        const manageGroup = (groupName) => {
            const exts = Array.from($.byName(groupName));
            const selectedExts = exts.filter(ext => ext.checked);
            selectedExts.forEach(ext => {
                if (!microprofileDeps.includes(ext.id)) {
                    const label = GeneratorHelper.getValueFromItem(ext.dataObject, kumuluzeeVersion);
                    const parsedLabelValue = GeneratorHelper.parseValue(label.value);
                    parsedExtensions.push(parsedLabelValue);

                    const versionKey = parsedLabelValue.versionKey.replace("${", "").replace("}", "");
                    const versionValue = parsedLabelValue.version;
                    const versionItem = `<${versionKey}>${versionValue}</${versionKey}>`;
                    versions.push(versionItem);
                }
            });
        };

        // handle generic groups
        manageGroup("config");
        manageGroup("discovery");
        manageGroup("reactive");
        manageGroup("logs");
        manageGroup("opentracing");
        manageGroup("other");

        // manage Metrics
        if (!microprofileDeps.includes("ext-metrics")) {
            const metricsCore = $.id("ext-metrics");
            const isMP12 = $.checked("mp-1.2");
            if (metricsCore.checked && !isMP12) {
                const label = GeneratorHelper.getValueFromItem(metricsCore.dataObject, kumuluzeeVersion);
                const parsedLabelValue = GeneratorHelper.parseValue(label.value);
                parsedExtensions.push(parsedLabelValue);

                const versionKey = parsedLabelValue.versionKey.replace("${", "").replace("}", "");
                const versionValue = parsedLabelValue.version;
                const versionItem = `<${versionKey}>${versionValue}</${versionKey}>`;
                versions.push(versionItem);
            }
            manageGroup("metrics-2");
        }

        // manage Arquillian testing
        const testing = testingExtensionDependencies;
        if ($.checked("ext-arq-junit") || $.checked("ext-arq-testng")) {
            // add kumuluz testing
            parsedExtensions.push(testing.kumuluzTesting);
            const kumuluzTestingKey = testing.kumuluzTesting.versionKey.replace("${", "").replace("}", "");
            const versionItem = `<${kumuluzTestingKey}>${testing.kumuluzTesting.version}</${kumuluzTestingKey}>`;
            versions.push(versionItem);
            // add arquillian bom version
            const bomKey = testing.arquillianBOMVersion.versionKey.replace("${", "").replace("}", "");
            const versionBomItem = `<${bomKey}>${testing.arquillianBOMVersion.version}</${bomKey}>`;
            versions.push(versionBomItem);
            // add jUnit
            if ($.checked("ext-arq-junit")) {
                parsedExtensions.push(testing.junitContainer);
                parsedExtensions.push(testing.junit);
                const junitKey = testing.junit.versionKey.replace("${", "").replace("}", "");
                const versionItem = `<${junitKey}>${testing.junit.version}</${junitKey}>`;
                versions.push(versionItem);
            }
            if ($.checked("ext-arq-testng")) {
                parsedExtensions.push(testing.testngContainer);
                parsedExtensions.push(testing.testng);
                const testngKey = testing.testng.versionKey.replace("${", "").replace("}", "");
                const versionItem = `<${testngKey}>${testing.testng.version}</${testngKey}>`;
                versions.push(versionItem);
            }
        }

        return {
            versions: versions,
            dependencies: parsedExtensions
        };
    }

    static _parseMicroProfileApis(kumuluzeeVersion, microprofileDeps) {
        const parsedApis = [];
        const versions = [];

        const microprofileApis = Array.from(document.getElementsByName("microprofile-apis"));
        const selectedApis = microprofileApis.filter(api => api.checked);
        selectedApis.forEach(api => {
            const label = GeneratorHelper.getValueFromItem(api.dataObject, kumuluzeeVersion);
            const parsedLabelValue = GeneratorHelper.parseValue(label.value);
            if (parsedLabelValue != null && !microprofileDeps.includes(api.id)) {
                parsedApis.push(parsedLabelValue);
                const versionKey = parsedLabelValue.versionKey.replace("${", "").replace("}", "");
                const versionValue = parsedLabelValue.version;
                const versionItem = `<${versionKey}>${versionValue}</${versionKey}>`;
                versions.push(versionItem);
            }
        });
        return {
            versions: versions,
            dependencies: parsedApis
        };
    }

    static _hasSnapshot(dependencies, kumuluzeeVersion) {
        for (let dependency of dependencies) {
            if (dependency.version && dependency.version.includes("SNAPSHOT")) {
                return true;
            }
        }
        return kumuluzeeVersion.includes("SNAPSHOT");
    }

    // end helper functions

    static generateFormData() {
        const $ = GeneratorHelper.initializeDollarFunction();

        const KUMULUZEE_VERSION = $.val("kumuluzee") || kumuluzEEVersionsList.find(version => version.recommended);

        const formData = {
            groupId: $.val("group-id") || "com.kumuluzee.sample",
            artifactId: $.val("artifact-id") || "sample",
            projectVersion: $.val("version") || "1.0.0",
            name: $.val("name") || "Sample project",
            description: $.val("description") || "Sample Kumuluz Project",
            kumuluzVersion: KUMULUZEE_VERSION,

            generateUberJar: $.checked("feat-uberjar"),

            dependencies: [],
            propertiesVersions: [],
            isArquillian: $.checked("ext-arq-junit") || $.checked("ext-arq-testng")
        };

        // MicroProfile
        const microprofile = GeneratorHelper._parseMicroprofiles(KUMULUZEE_VERSION);
        let microprofileDependencies = [];
        if (microprofile) {
            formData.microprofile = microprofile.value;
            microprofileDependencies = microprofile.mp;
        }

        // Components
        const components = GeneratorHelper._parseComponents(KUMULUZEE_VERSION, microprofileDependencies);
        formData.dependencies.push(...components);

        // Extensions
        const extensions = GeneratorHelper._parseExtensions(KUMULUZEE_VERSION, microprofileDependencies);
        formData.dependencies.push(...extensions.dependencies);
        formData.propertiesVersions.push(...extensions.versions);

        // MicroProfile APIs
        const microprofileApis = GeneratorHelper._parseMicroProfileApis(KUMULUZEE_VERSION, microprofileDependencies);
        formData.dependencies.push(...microprofileApis.dependencies);
        formData.propertiesVersions.push(...microprofileApis.versions);

        // Remove duplicate properties
        const seenProps = [];
        formData.propertiesVersions = formData.propertiesVersions.filter(prop => {
            if (seenProps.indexOf(prop) < 0) {
                seenProps.push(prop);
                return true;
            }

            return false;
        });

        // Check for snapshots
        formData.hasSnapshots = GeneratorHelper._hasSnapshot(formData.dependencies, KUMULUZEE_VERSION);

        return formData;
    }

    static generatePomFromGenerator() {
        const formData = GeneratorHelper.generateFormData();

        const versionIsHigherThan_2_4_0 = GeneratorHelper.versionIsLargerOrEqual(formData.kumuluzVersion, "2.4.0");
        const templateUrl = `/generator-template/template${versionIsHigherThan_2_4_0 ? "240" : ""}.xml?t=${new Date().getTime()}`;
        // const templateUrl = `/generator-template/templatetest.xml?t=${new Date().getTime()}`;

        GeneratorHelper.buildPom(formData, templateUrl);
    }

    static buildPom(formData, templateUrl) {
        const req = new XMLHttpRequest();
        req.open("GET", templateUrl, true);
        req.setRequestHeader("Accept", "text/plain");
        req.addEventListener("load", (e) => {
            const rawXML = e.target.response;
            const pom = mustache.render(rawXML, formData);
            const blob = new Blob([pom], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, "pom.xml");
        });
        req.addEventListener("error", (res) => {
            // eslint-disable-next-line no-console
            console.error(res);
        });
        req.send();
    }

}
