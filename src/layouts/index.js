import React, {Component} from "react";
import PropType from "prop-types";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

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

    componentDidMount() {
        if (typeof window !== "undefined") {
            this.__initGoogleAnalytics();
        }
    }

    __initGoogleAnalytics() {
        ReactGA.initialize("UA-96110617-3");
        ReactGA.pageview(window.location.pathname + window.location.search);
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
