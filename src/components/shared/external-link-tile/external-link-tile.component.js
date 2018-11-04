import React, {Component} from "react";
import PropType from "prop-types";
import {LineDividerComponent} from "../export.shared.components";

import "./external-link-tile.component.scss";
import chevron from "../../../assets/images/link-chevron.svg";

export class ExternalLinkTileComponent extends Component {

    static propTypes = {
        data: PropType.object
    };

    constructor(props) {
        super(props);
    }

    renderLinkIfNotHash(links, text) {
        // handle if links is Array
        if (Array.isArray(links)) {
            return links.map((link, index) => {
                if (link.url !== "#") {
                    return (
                        <div className="link" key={index}>
                            <a href={link.url} target="_blank" rel="noreferrer noopener">
                                <span>
                                    {link.title}
                                </span>
                                <img src={chevron}/>
                            </a>
                        </div>
                    );
                }
            });
        }
        // handle if links is single string
        if (links !== "#") {
            return (
                <div className="link">
                    <a href={links} target="_blank" rel="noreferrer noopener">
                        <span>
                            {text}
                        </span>
                        <img src={chevron}/>
                    </a>
                </div>
            );
        }
    }

    render() {
        const {data} = this.props;
        return (
            <div className="ee-external-link-tile-component">
                <div className="container">
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        {data.content}
                    </p>
                    {this.renderLinkIfNotHash(data.url, "View on GitHub")}
                    {this.renderLinkIfNotHash(data.npmUrl, "View on NPM")}
                    {this.renderLinkIfNotHash(data.sampleUrl, "View sample")}
                </div>
                <LineDividerComponent/>
            </div>
        );
    }
}
