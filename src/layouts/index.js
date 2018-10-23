import React, {Component} from "react";
import PropType from "prop-types";
import Helmet from "react-helmet";

import {FooterComponent, NavbarComponent} from "../components/export.components";

import "./layout.scss";
import favicon from "./favicon.ico";

export default class Wrapper extends Component {

    static propTypes = {
        children: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <div className="ee-wrapper">
                <Helmet>
                    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                    <link rel="icon" href={favicon} type="image/x-icon" />
                </Helmet>
                <NavbarComponent/>
                <div className="ee-wrapper-content">
                    {children()}
                </div>
                <FooterComponent/>
            </div>
        );
    }
}
