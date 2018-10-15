import React, {Component} from "react";
import {push} from "gatsby-link";

import "./support-page.scss";
import {LineDividerComponent} from "../../components/shared/export.shared.components";
import checkboxImage from "../../assets/images/checkbox.svg";
import {opinionsList} from "../../content/export.content";
import {TheyTrustUsComponent} from "../../components/index-page/export.index.components";
import {MAIL_TO_ADDRESS} from "../../content/constants.content";
import Helmet from "react-helmet";

export default class SupportPage extends Component {

    constructor(props) {
        super(props);
    }

    renderCheckboxLine(text) {
        return (
            <div className="checkbox-item">
                <div className="image">
                    <img src={checkboxImage} />
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="ee-support-page">
                <Helmet title="KumuluzEE - Support"/>
                <div className="header">
                    <div className="title">
                        <h1>Choose the plan that suits you best</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="description">
                        <p>
                            If you would like to order a support plan, please select the appropriate plan and contact
                            us.
                        </p>
                    </div>
                    <div className="tiles">
                        <div className="tile-container">
                            <div className="tile left-tile">
                                <div className="tile-header">
                                    <h2>Free</h2>
                                    <p>Our basic version of KumuluzEE for teams that are just getting started.</p>
                                    <div>
                                        <span className="button" onClick={() => push("/projects")}>
                                            Get started
                                        </span>
                                    </div>
                                </div>
                                <div className="hr"/>
                                <div className="tile-content">
                                    <h4>Free features</h4>
                                    <div>
                                        {this.renderCheckboxLine("KumuluzEE unlimited usage")}
                                        {this.renderCheckboxLine("GitHub issues support")}
                                    </div>
                                </div>
                                <LineDividerComponent/>
                            </div>
                        </div>
                        <div className="tile-container">
                            <div className="tile right-tile">
                                <div className="tile-header">
                                    <h2>Enterprise</h2>
                                    <p>For businesses that need full support for 24/7 operations</p>
                                    <div>
                                        <span className="button" onClick={() => window.location.href = MAIL_TO_ADDRESS}>
                                            Contact us
                                        </span>
                                    </div>
                                </div>
                                <div className="hr"/>
                                <div className="tile-content">
                                    <h4>Enterprise features</h4>
                                    <div>
                                        {this.renderCheckboxLine("Hot fixes")}
                                        {this.renderCheckboxLine("Patch releases")}
                                        {this.renderCheckboxLine("Extended support for implementations")}
                                        {this.renderCheckboxLine("Web and email support")}
                                        {this.renderCheckboxLine("24h response for support")}
                                        {this.renderCheckboxLine("4h response for urgent problems in production")}
                                        {this.renderCheckboxLine("Full interoperability with Java EE applications servers")}
                                        {this.renderCheckboxLine("Solution for integrated documentation of microservices")}
                                        {this.renderCheckboxLine("Integration with API Management")}
                                    </div>
                                </div>
                                <LineDividerComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
