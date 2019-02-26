import React, {Component} from "react";
import Helmet from "react-helmet";

import {Layout} from "../../layouts/layout";
import {TheyTrustUsComponent} from "../../components/index-page/they-trust/they-trust-us.component";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

import "./opinions-page.scss";

import {opinionsList} from "../../content/support-page/opinions.content";


export default class OpinionsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    renderOpinionBox(opinion) {
        return (
            <div className="opinion-box-item">
                <div className="image">
                    <img src={opinion.image} alt="opinion"/>
                </div>
                <p className="box-item-content">{opinion.content}</p>
                <p className="name">{opinion.name}</p>
                <p className="role">{opinion.role}</p>
            </div>
        );
    }

    render() {
        return (
            <Layout>
                <div className="ee-opinions-page">
                    <Helmet title="KumuluzEE - Opinions" htmlAttributes={{lang: "en"}}/>
                    <div className="header">
                        <div className="title">
                            <h1>KumuluzEE is in use today</h1>
                        </div>
                    </div>
                    <div className="content">
                        <div className="people-saying-section">
                            <h1>WHAT PEOPLE ARE SAYING ABOUT KUMULUZEE</h1>
                            <div className="opinions-section">
                                {opinionsList.map((opinion, index) => (
                                    <div key={index} className="opinion-item">
                                        {this.renderOpinionBox(opinion)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="they-trust-section">
                            <TheyTrustUsComponent/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
