import React, {Component} from "react";
import {push} from "gatsby-link";
import Helmet from "react-helmet";

import {
    BlogLinksComponent,
    CollaborationsComponent, ExampleCodeComponent, GetStartedComponent,
    HighlightsComponent, OpinionsComponent, TheyTrustUsComponent, WhatIsKumuluzComponent,
    WhyKumuluzComponent
} from "../components/index-page/export.index.components";

import "./index-page.scss";
import microprofileLogo from "../assets/images/microprofile-logo.png";

import {MICROPROFILE_URL} from "../content/constants.content";

export default class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.alterPageIfBlogLinksOpened = this.alterPageIfBlogLinksOpened.bind(this);
    }

    alterPageIfBlogLinksOpened(isOpened, moveFor) {
        if (isOpened) {
            this.collaborationSection.style.marginTop = `${moveFor}px`;
        } else {
            this.collaborationSection.style.marginTop = `${moveFor}px`;
        }
    }

    render() {

        return (
            <div className="ee-index-page">
                <Helmet title="KumuluzEE"/>
                <div className="blue-gradient-area">
                    <div className="header-container">
                        <div className="microprofile-tag">
                            <a href={MICROPROFILE_URL} target="_blank" >
                                <img src={microprofileLogo}/>
                            </a>
                        </div>
                        <div className="title">
                            <h1>A lightweight open-source microservice framework.</h1>
                            <h2>
                                Develop microservices with Java EE / Jakarta EE technologies and extend them with Node.js, Go and
                                other languages. Migrate existing Java EE applications to microservices and
                                cloud-native architecture.
                            </h2>
                        </div>
                        <div className="buttons">
                            <span className="get-started" onClick={() => push("/tutorials")}>Get started</span>
                            <span className="pom-generator" onClick={() => push("/generator")}>POM generator</span>
                        </div>
                        <div className="blog-tiles">
                            <BlogLinksComponent blogTilesOpened={this.alterPageIfBlogLinksOpened}/>
                        </div>
                    </div>
                </div>
                <div className="collaboration-section index-section" ref={ref => this.collaborationSection = ref}>
                    <CollaborationsComponent />
                </div>
                <div className="what-kumuluz-section index-section">
                    <WhatIsKumuluzComponent/>
                </div>
                <div className="highlights-section index-section">
                    <HighlightsComponent />
                </div>
                <div className="why-kumuluz-section index-section">
                    <WhyKumuluzComponent />
                </div>
                <div className="opinions-section index-section">
                    <OpinionsComponent/>
                </div>
                <div className="example-code-section index-section">
                    <ExampleCodeComponent/>
                </div>
                <div className="they-trust-section index-section">
                    <TheyTrustUsComponent/>
                </div>
                <div className="get-started-section index-section">
                    <GetStartedComponent/>
                </div>
            </div>
        );
    }

}
