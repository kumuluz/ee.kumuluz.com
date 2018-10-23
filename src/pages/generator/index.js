import React, {Component} from "react";

import "./generator-page.scss";
import {
    CheckboxGroupComponent,
    FormInputComponent,
    SectionTitleComponent
} from "../../components/generator-page/export-generator-components";
import {LineDividerComponent} from "../../components/shared/export.shared.components";
import {GeneratorHelper} from "../../components/generator-page/generator-helper.class";
import {
    componentsList,
    extensionsList,
    featuresList,
    kumuluzEEVersionsList, microprofileAPIsList,
    microprofilesList
} from "../../content/generator-page/export.data";
import Helmet from "react-helmet";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

export default class GeneratorPage extends Component {

    constructor(props) {
        super(props);

        // one per group
        this.disableOtherMicroProfiles = this.disableOtherMicroProfiles.bind(this);
        this.disableOtherJPAs = this.disableOtherJPAs.bind(this);
        this.disableOtherConfigs = this.disableOtherConfigs.bind(this);
        this.disableOtherDiscoveries = this.disableOtherDiscoveries.bind(this);
        this.disableOtherTests = this.disableOtherTests.bind(this);

        // both
        this.checkBoth = this.checkBoth.bind(this);

        // parent
        this.checkForCheckedParent = this.checkForCheckedParent.bind(this);

        // all dependencies
        this.selectAllDependentItems = this.selectAllDependentItems.bind(this);
        //this.checkForOtherdependencies = this.checkForOtherdependencies.bind(this);

        this.checkForKumuluzeeVersion = this.checkForKumuluzeeVersion.bind(this);

        this.state = {
            version: "",
            missingDependencyWarnings: []
        };
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
        this.setState({
            ...this.state,
            version: document.getElementById("kumuluzee").value
        });
        this.checkForCheckedParent("ext-metrics", ["ext-metrics-logs", "ext-metrics-logstash"]);
        GeneratorHelper.getLatestLogsVersion();

    }

    selectAllDependentItems($event) {
        const selectedElement = $event.target;
        const dependencies = selectedElement.dataObject.dependencies;

        if (selectedElement.checked) {
            dependencies.forEach(dep => {
                const elem = document.getElementById(dep);
                elem.checked = true;
                elem.disabled = true;
                elem.parentNode.classList.add("disabled-checkbox");
            });
        } else {
            dependencies.forEach(dep => {
                const elem = document.getElementById(dep);
                elem.checked = false;
                elem.disabled = false;
                elem.parentNode.classList.remove("disabled-checkbox");
            });
        }
    }

    setDisableStateCheckBoxElement(elementId, disable) {
        const inputElem = document.getElementById(elementId);
        const parentElem = inputElem.parentNode;

        if (disable) {
            inputElem.disabled = true;
            parentElem.classList.add("disabled-checkbox");
        } else {
            inputElem.disabled = false;
            parentElem.classList.remove("disabled-checkbox");
        }
    }

    // ALLOW ONLY ONE OF THE TYPE FUNC
    disableOtherMicroProfiles($event) {
        this.disableOtherCheckboxes($event.target, "microprofile");
    }
    disableOtherJPAs($event) {
        this.disableOtherCheckboxes($event.target, "components", (comp) => comp.id.includes("-jpa-"));
    }
    disableOtherConfigs($event) {
        this.disableOtherCheckboxes($event.target, "config");
    }
    disableOtherDiscoveries($event) {
        this.disableOtherCheckboxes($event.target, "discovery");
    }
    disableOtherTests($event) {
        this.disableOtherCheckboxes($event.target, "arquillian");
    }
    disableOtherCheckboxes(target, elementName, filterFunc = undefined) {
        let elems;
        if (filterFunc) {
            elems = Array.from(document.getElementsByName(elementName)).filter(filterFunc);
        } else {
            elems = Array.from(document.getElementsByName(elementName));
        }
        elems.forEach(box => {
            if (box !== target) {
                box.checked = false;
            }
        });
    }

    // CLICK BOTH
    checkBoth(clickedElem, dependentElem) {
        document.getElementById(dependentElem).checked = document.getElementById(clickedElem).checked;
    }

    // DISABLE IF PARENT IS NOT SELECTED
    checkForCheckedParent(parentId, childIdArray) {
        const parent = document.getElementById(parentId);
        childIdArray.forEach(child => {
            this.setDisableStateCheckBoxElement(child, !parent.checked);
        });
    }

    checkForKumuluzeeVersion($event) {
        const version = $event.target.value;
        this.setState({
            ...this.state,
            version: version
        });
    }

    /* _removeFulfilledReqs() {
        const toBeRemoved = [];
        const newWarnings = this.state.missingDependencyWarnings.slice();
        newWarnings.forEach((warning, index) => {
            const source = document.getElementById(warning.source);
            const need = document.getElementById(warning.needs);
            if ((source.checked && need.checked) || !source.checked) {
                toBeRemoved.push(index);
            }
        });

        toBeRemoved.forEach(index => {
            newWarnings.splice(index, 1);
        });

        this.setState({
            ...this.state,
            missingDependencyWarnings: newWarnings
        });
    }*/

    /*checkForOtherdependencies($event) {
        const kumuluzeeVersion = document.getElementById("kumuluzee").value;
        const selectedItem = $event.target;

        const selectedLabel = GeneratorHelper.getValueFromItem(selectedItem.dataObject, kumuluzeeVersion);
        const dependencies = selectedItem.dataObject.dependencies;

        this._removeFulfilledReqs();
        dependencies.forEach(dep => {
            const elem = document.getElementById(dep);
            if (!elem.checked) {
                const label = GeneratorHelper.getValueFromItem(elem.dataObject, kumuluzeeVersion);
                const newWarnings = this.state.missingDependencyWarnings.slice();
                newWarnings.push({
                    source: selectedItem.id,
                    needs: elem.id,
                    text: `'${selectedLabel.label}' depends on '${label.label}', but you haven't selected it yet.`
                });
                this.setState({
                    ...this.state,
                    missingDependencyWarnings: newWarnings
                });
            }
        });



    }*/

    render() {
        return (
            <div className="ee-generator-page">
                <Helmet title="KumuluzEE - Generator"/>
                <div className="header">
                    <div className="title">
                        <h1>Quickstart development with online pom generator</h1>
                    </div>
                </div>
                {/* PROJECT METADATA */}
                <div className="metadata">
                    <SectionTitleComponent number={1} title={"Project Metadata"}/>
                    <div className="first-row">
                        <div className="groupid">
                            <FormInputComponent label={"GroupId"} id={"group-id"} placeholder={"com.kumuluzee.sample"}/>
                        </div>
                        <div className="name">
                            <FormInputComponent label={"Name"} id={"name"} placeholder={"Sample project"}/>
                        </div>
                        <div className="version">
                            <FormInputComponent label={"Version"} id={"version"} placeholder={"1.0.0"}/>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="left-side">
                            <div className="artifactid">
                                <FormInputComponent label={"ArtifactId"} id={"artifact-id"} placeholder={"sample"}/>
                            </div>
                            <div className="kumuluzee">
                                <FormInputComponent label={"KumuluzEE"} id={"kumuluzee"} type={"select"}
                                    optionList={kumuluzEEVersionsList}
                                    whenChange={this.checkForKumuluzeeVersion}
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="description">
                                <FormInputComponent label={"Description"} id={"description"}
                                    type={"textarea"} rows={5} placeholder={"Sample Kumuluz Project"}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MP-PROFILES & FEATURES */}
                <div className="profiles-features">
                    <div className="profiles">
                        <SectionTitleComponent number={2} title={"Profiles"}/>
                        <CheckboxGroupComponent groupName="microprofile" items={microprofilesList}
                            version={this.state.version} columns={2}
                            onSelected={(e) => {
                                this.disableOtherMicroProfiles(e);
                                this.selectAllDependentItems(e);
                            }}/>
                    </div>
                    <div className="features">
                        <SectionTitleComponent number={3} title={"Features"}/>
                        <CheckboxGroupComponent version={this.state.version} groupName={"uberjar"}
                            items={featuresList}/>
                    </div>
                </div>
                {/* COMPONENTS */}
                <div className="components">
                    <SectionTitleComponent number={4} title={"Components"}/>
                    <CheckboxGroupComponent version={this.state.version} groupName={"components"}
                        items={componentsList} columns={3}
                        onSelected={(e) => {
                            if (e.target.id.includes("-jpa-")) {
                                this.disableOtherJPAs(e);
                            }
                            //this.checkForOtherdependencies(e);
                        }}/>
                </div>
                {/* PROJECTS */}
                <div className="extensions">
                    <SectionTitleComponent number={5} title={"Projects"}/>
                    <div className="extension-groups">
                        <div className="first-group group">
                            <div>
                                <h5>KumuluzEE Config</h5>
                                <CheckboxGroupComponent version={this.state.version} groupName={"config"}
                                    items={extensionsList.config}
                                    onSelected={this.disableOtherConfigs}/>
                            </div>
                            <div>
                                <h5>KumuluzEE Discovery</h5>
                                <CheckboxGroupComponent version={this.state.version} groupName={"discovery"}
                                    items={extensionsList.discovery}
                                    onSelected={this.disableOtherDiscoveries}/>
                            </div>
                            <div className="semi-group">
                                <CheckboxGroupComponent version={this.state.version} groupName={"metrics-1"}
                                    items={extensionsList.metrics.level1} onSelected={(e) => {
                                        if (e.target.id === "ext-metrics") {
                                            this.checkBoth("ext-metrics", "mpa-metrics");
                                            this.checkForCheckedParent("ext-metrics", ["ext-metrics-logs", "ext-metrics-logstash"]);
                                        }
                                    }}/>
                                <div style={{marginLeft: "20px"}}>
                                    <CheckboxGroupComponent version={this.state.version} groupName={"metrics-2"}
                                        items={extensionsList.metrics.level2}/>
                                </div>
                            </div>
                        </div>
                        <div className="second-group group">
                            <div>
                                <h5>KumuluzEE Reactive</h5>
                                <CheckboxGroupComponent version={this.state.version} groupName={"reactive"}
                                    items={extensionsList.reactive}/>
                            </div>
                            <div>
                                <h5>KumuluzEE Arquillian Adapter</h5>
                                <CheckboxGroupComponent version={this.state.version} groupName={"arquillian"}
                                    items={extensionsList.arquillian}
                                    onSelected={this.disableOtherTests}/>
                            </div>
                        </div>
                        <div className="third-group group">
                            <CheckboxGroupComponent version={this.state.version} groupName={"other"}
                                items={extensionsList.other} onSelected={(e) => {
                                    if (e.target.id === "ext-other-health") {
                                        this.checkBoth("ext-other-health", "mpa-healthcheck");
                                    } else if (e.target.id === "ext-other-faulttolerance") {
                                        this.checkBoth("ext-other-faulttolerance", "mpa-faulttolerance");
                                    }
                                }}/>
                        </div>
                    </div>
                </div>
                {/* MICROPROFILE APIS */}
                <div className="microprofileapis">
                    <SectionTitleComponent number={6} title={"MicroProfile APIs"}/>
                    <CheckboxGroupComponent version={this.state.version} groupName={"microprofile-apis"}
                        items={microprofileAPIsList} columns={3}
                        onSelected={(e) => {
                            if (e.target.id === "mpa-healthcheck") {
                                this.checkBoth("mpa-healthcheck", "ext-other-health");
                            } else if (e.target.id === "mpa-faulttolerance") {
                                this.checkBoth("mpa-faulttolerance", "ext-other-faulttolerance");
                            } else if (e.target.id === "mpa-metrics") {
                                this.checkBoth("mpa-metrics", "ext-metrics");
                                this.checkForCheckedParent("ext-metrics", ["ext-metrics-logs", "ext-metrics-logstash"]);
                            }
                        }}/>
                </div>
                <div className="button-area">
                    <LineDividerComponent/>
                    <div>
                        {this.state.missingDependencyWarnings.map((item, index) => (
                            <div key={index} style={{color: "red"}}>
                                {item.text}
                            </div>
                        )) }
                    </div>
                    <span className="button" onClick={() => {
                        GeneratorHelper.generatePomFromGenerator();
                    }}>GENERATE POM</span>
                </div>
            </div>
        );
    }

}
