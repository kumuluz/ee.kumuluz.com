import React, {Component} from "react";

import "./microprofile-page.scss";

import {ExternalLinkTileComponent} from "../../components/shared/external-link-tile/external-link-tile.component";
import {microprofileList} from "../../content/export.content";
import Helmet from "react-helmet";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

export default class MicroprofilePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        return (
            <div className="ee-microprofile-page">
                <Helmet title="KumuluzEE - MicroProfile"/>
                <div className="header">
                    <div className="title">
                        <h1>Support for the Eclipse MicroProfile specification</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="description">
                        <p className="font-normal">
                            KumuluzEE is compliant with Eclipse MicroProfile 1.0, 1.1, 1.2 and 2.0 specifications and
                            implements the following APIs:
                        </p>
                    </div>
                    <div className="tiles">
                        {microprofileList.map((proj, index) => (
                            <div className={proj.size === 2 ? "tile order-2" : "tile"} key={index}>
                                <ExternalLinkTileComponent data={proj}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
