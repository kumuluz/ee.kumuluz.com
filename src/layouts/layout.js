import React, {Component} from "react";
import * as PropType from "prop-types";
import Helmet from "react-helmet";

import {FooterComponent, NavbarComponent} from "../components/export.components";

import "./layout.scss";
import favicon from "./favicon.ico";
import {CookiesComponent} from "../components/shared/cookies/cookies.component";

export class Layout extends Component {

    static propTypes = {
        children: PropType.object
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
                    {children}
                </div>
                <FooterComponent/>
                <CookiesComponent/>
            </div>
        );
    }
}
