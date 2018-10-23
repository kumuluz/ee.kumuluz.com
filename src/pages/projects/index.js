import React, {Component} from "react";

import "./projects-page.scss";
import {ExternalLinkTileComponent} from "../../components/shared/export.shared.components";
import {projectsList} from "../../content/export.content";
import Helmet from "react-helmet";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

export default class ProjectsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        return (
            <div className="ee-projects-page">
                <Helmet title="KumuluzEE - Projects"/>
                <div className="header">
                    <div className="title">
                        <h1>Support the common cloud-native patterns with KumuluzEE projects</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="description">
                        <p className="font-normal">
                            KumuluzEE provides projects for developing common patterns in cloud-native architectures,
                            including configuration, logging, discovery, circuit-breakers, metrics, security, event streaming
                            and more.
                        </p>
                    </div>
                    <div className="tiles">
                        {projectsList.map((proj, index) => (
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
