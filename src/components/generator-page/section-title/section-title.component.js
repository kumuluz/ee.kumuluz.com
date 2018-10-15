import React, {Component} from "react";
import PropType from "prop-types";
import {LineDividerComponent} from "../../shared/export.shared.components";

import "./section-title.component.scss";

export class SectionTitleComponent extends Component {

    static propTypes = {
        title: PropType.string,
        number: PropType.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title, number} = this.props;

        return (
            <div className="ee-section-title-component">
                <div className="content">
                    <div className="number">
                        {number}
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
                <LineDividerComponent/>
            </div>
        );
    }
}
