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

    renderLinkIfNotHash(link) {
        if (link !== "#") {
            return (
                <a href={link} target="_blank">
                      <span>
                          View on Github
                      </span>
                    <img src={chevron}/>
                </a>
            )
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
                    {this.renderLinkIfNotHash(data.url)}
                </div>
                <LineDividerComponent/>
            </div>
        );
    }
}
