import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Link from "gatsby-link";
import Waypoint from "react-waypoint";

import "./tutorial-page.scss";
import blueArrowImage from "../../assets/images/arrow.svg";
import {GITHUB_URL} from "../../content/constants.content";
import {microservicesSamples} from "../../content/tutorials-page/microservices-samples";
import {kumuluzeeProjects} from "../../content/tutorials-page/kumuluzee-projects";
import Helmet from "react-helmet";
import {documentationItems} from "../../content/tutorials-page/documentation";

const navbarItems = [
    {
        title: "Tutorials",
        id: "tutorials"
    },
    {
        title: "Quickstart Samples",
        id: "quickstart-samples"
    },
    {
        title: "KumuluzEE Documentation",
        id: "documentation"
    }
];

const tutorialItems = [
    {
        title: "Running KumuluzEE microservices on Kubernetes (Part 1)",
        content: "",
        url: "https://blog.kumuluz.com/product/developers/2017/12/03/kumuluzee-microservices-on-kubernetes_part1",
        external: true
    },
    {
        title: "Running KumuluzEE microservices on Kubernetes (Part 2)",
        content: "",
        url: "https://blog.kumuluz.com/product/developers/2017/12/14/kumuluzee-microservices-on-kubernetes_part2",
        external: true
    },
    {
        title: "Cloud-native Java EE Microservices with KumuluzEE: REST service using config, discovery, security, metrics, logging and fault tolerance",
        content: "A goal of this tutorial is to develop a cloud-native Java EE microservice application, using KumuluzEE microservice framework and KumuluzEE projects.",
        url: "https://github.com/kumuluz/kumuluzee-samples/blob/master/tutorial-microservice-config-discovery-faulttolerance-logs-metrics-security/README.md",
        external: true
    },
    {
        title: "Develop microservices with Java EE and KumuluzEE",
        content: "This article explores the way the microservices can be used together with Java EE using KumuluzEE. It expands on the benefits and drawbacks compared to the monolithic architecture that is popular in Java EE.",
        url: "/tutorials/develop-microservices-with-java-ee-and-kumuluzee",
        external: false
    }
];

export default class TutorialPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNavElem: null
        };
        this.makeNavbarSticky = this.makeNavbarSticky.bind(this);
        this.setActiveElement = this.setActiveElement.bind(this);

        this.previousScroll = 0;
    }

    makeNavbarSticky(makeSticky) {
        if (makeSticky) {
            const navbarPanel = document.getElementById("navigation-panel");
            const navbarLocation = navbarPanel.getBoundingClientRect();
            const left = navbarLocation.left;
            const width = navbarLocation.width;

            navbarPanel.classList.add("sticky-navigation");
            navbarPanel.style.left = left + "px";
            navbarPanel.style.width = width + "px";
        } else {
            const navbarPanel = document.getElementById("navigation-panel");
            navbarPanel.classList.remove("sticky-navigation");
            navbarPanel.style.left = "";
            navbarPanel.style.width = "";
        }
    }

    setActiveElement(elementId) {
        const element = document.getElementById(elementId);
        const active = this.state.activeNavElem;
        if (active) {
            active.classList.remove("active");
        }
        element.classList.add("active");
        this.setState({
            activeNavElem: element
        });
    }

    isScrollingDown() {
        const scroll = typeof window !== "undefined" ? window.pageYOffset || document.documentElement.scrollTop : 0;
        if (scroll > this.previousScroll) {
            // down
            this.previousScroll = scroll;
            return true;
        } else {
            //up
            this.previousScroll = scroll;
            return false;
        }
    }

    componentDidMount() {
        this.setActiveElement("navigation-item-0");
        this.previousScroll = typeof window !== "undefined" ? window.pageYOffset || document.documentElement.scrollTop : 0;
    }

    renderLink(item) {
        if (item.external) {
            return (
                <a href={item.url} target="_blank">
                    {item.title}
                    <FontAwesomeIcon icon={faChevronRight}/>
                </a>
            );
        }
        return (
            <Link to={item.url}>
                {item.title}
                <FontAwesomeIcon icon={faChevronRight}/>
            </Link>
        );
    }

    render() {
        return (
            <div className="ee-tutorials-page">
                <Helmet title="KumuluzEE - Tutorials"/>
                <div className="header">
                    <div className="title">
                        <h1>Tutorials and Quickstart Samples</h1>
                    </div>
                </div>

                <div className="content">
                    <div className="content-section">
                        <div className="navigation" id="tutorial-navigation">
                            <div id="navigation-panel">
                                {navbarItems.map((item, index) => (
                                    <div id={"navigation-item-" + index} className="navigation-item" key={index}
                                         onClick={() => {
                                             const elemToScrollTo = document.getElementById(item.id);
                                             if (elemToScrollTo) {
                                                 elemToScrollTo.scrollIntoView();
                                                 this.setActiveElement("navigation-item-" + index);
                                             }
                                         }}>
                                        <span>{item.title}</span>
                                        <img src={blueArrowImage}/>
                                    </div>
                                ))}
                            </div>
                            <Waypoint onLeave={() => this.makeNavbarSticky(true)}/>
                        </div>
                        <div className="sections">

                            <div className="tutorials" id="tutorials">
                                <h1>Tutorials</h1>
                                <Waypoint onEnter={() => {
                                    this.makeNavbarSticky(false);
                                }}/>
                                <p>Guides to help you get started with development.</p>
                                <div>
                                    {tutorialItems.map((tut, index) => (
                                        <div className="tutorial-item" key={index}>
                                            {this.renderLink(tut)}
                                            {tut.content ? <div className="tutorial-content">{tut.content}</div> : null}
                                        </div>
                                    ))}
                                </div>
                                <Waypoint onLeave={() => {
                                    if (this.isScrollingDown()) {
                                        this.setActiveElement("navigation-item-1");
                                    }
                                }} onEnter={() => {
                                    if (!this.isScrollingDown()) {
                                        this.setActiveElement("navigation-item-0");
                                    }
                                }}/>
                            </div>

                            <div className="quickstart-samples" id="quickstart-samples">
                                <h1>Quickstart Samples</h1>
                                <p>
                                    Working examples ready for you to get started. All samples are available on&#160;
                                    <a href={GITHUB_URL} target="_blank">GitHub.</a>
                                </p>
                                <h2>JAVA EE MICROSERVICES</h2>
                                <div className="samples">
                                    {microservicesSamples.map((sample, index) => (
                                        <div className="sample-item" key={index}>
                                            {sample.isNew ? <span className="new-tag">NEW</span> : null}
                                            <a href={sample.url} target="_blank">
                                                {sample.title} <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <div className="sample-item-desc">
                                                {sample.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h2>KumuluzEE Projects</h2>
                                {/*kumuluzee-projects*/}
                                <div className="samples">
                                    {kumuluzeeProjects.map((project, index) => (
                                        <div className="sample-item" key={index}>
                                            {project.isNew ? <span className="new-tag">NEW</span> : null}
                                            <a href={project.url} target="_blank">
                                                {project.title} <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <div className="sample-item-desc">
                                                {project.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Waypoint onLeave={() => {
                                    if (this.isScrollingDown()) {
                                        this.setActiveElement("navigation-item-2");
                                    }
                                }} onEnter={() => {
                                    if (!this.isScrollingDown()) {
                                        this.setActiveElement("navigation-item-1");
                                    }
                                }}/>
                            </div>

                            <div className="documentation" id="documentation">
                                <h1>Documentation</h1>
                                <p>Documentation describing how to use KumuluzEE is available on GitHub.</p>

                                <h2>KumuluzEE microservice framework</h2>
                                <div className="samples docs-header">
                                    {documentationItems.microservice.header.map((doc, index) => (
                                        <div className="sample-item" key={index}>
                                            {doc.isNew ? <span className="new-tag">NEW</span> : null}
                                            <a href={doc.url} target="_blank">
                                                {doc.title} <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <div className="sample-item-desc">
                                                {doc.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="samples">
                                    {documentationItems.microservice.body.map((doc, index) => (
                                        <div className="sample-item" key={index}>
                                            {doc.isNew ? <span className="new-tag">NEW</span> : null}
                                            <a href={doc.url} target="_blank">
                                                {doc.title} <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <div className="sample-item-desc">
                                                {doc.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h2>Microprofile</h2>
                                <div className="samples">
                                    {documentationItems.microprofile.map((doc, index) => (
                                        <div className="sample-item" key={index}>
                                            {doc.isNew ? <span className="new-tag">NEW</span> : null}
                                            <a href={doc.url} target="_blank">
                                                {doc.title} <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <div className="sample-item-desc">
                                                {doc.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
