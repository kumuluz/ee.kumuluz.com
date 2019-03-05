import {VersionUtil} from "../../../components/generator-page/version.util";

export class CheckboxModel {

    /**
     * @param {string} id checkbox id
     * @param {VersionedLabel[]} labels array of version rules
     * @param {string[]} dependencies array of unique ids this component depends on
     * @param {boolean} enabledByDefault if true it will take lowest version as value, if false it will disable checkbox that doesn't match any version
     */
    constructor(id, labels, dependencies, enabledByDefault = false) {
        this.id = id;
        this.labels = labels;
        this.dependencies = dependencies;

        this.labels.sort((l1, l2) => {
            if (l1.minVersion.toUpperCase() < l2.minVersion.toUpperCase()) return 1;
            if (l1.minVersion.toUpperCase() > l2.minVersion.toUpperCase()) return -1;
            return 0;
        });

        const lowestVersion = this.labels[this.labels.length - 1];
        if (enabledByDefault) {
            this.labels.push(new VersionedLabel("*", "*", lowestVersion.label, lowestVersion.value));
        } else {
            if (!this.labels.find(lbl => lbl.minVersion === "*")) {
                this.labels.push(new VersionedLabel("*", "*", lowestVersion.label, "none"));
            }
        }
    }

    getValue(version) {
        for(let valueToCheck of this.labels) {
            if (valueToCheck.value === "none") {
                return {
                    label: valueToCheck.label,
                    disabled: true
                };
            }
            if (VersionUtil.versionIsLargerOrEqual(version, valueToCheck.minVersion)
                && VersionUtil.versionIsSmallerOrEqual(version, valueToCheck.maxVersion)) {
                return {
                    label: valueToCheck.label,
                    value: valueToCheck.value,
                    disabled: false
                };
            }
        }
    }
}

export class VersionedLabel {

    constructor(minVersion, maxVersion, label, value) {
        this.minVersion = minVersion;
        this.maxVersion = maxVersion;
        this.label = label;
        this.value = value;
    }
}
