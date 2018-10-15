import React, {Component} from "react";
import Link from "gatsby-link";

import "./what-is-kumuluz.component.scss";
import javaEEMicroservicesImage from "../../../assets/images/javaee-microservices.svg";
import whatIsKumuluzImage from "../../../assets/images/what-is-kumuluz.svg";
import whiteCaretImage from "../../../assets/images/white-caret.svg";
import fullyCloudImage from "../../../assets/images/fully-cloud.svg";

import {MICROPROFILE_URL} from "../../../content/constants.content";

const boxes = [
    {
        image: whatIsKumuluzImage,
        title: "What is KumuluzEE",
        description: "KumuluzEE is a lightweight framework for developing microservices using standard Java, Java EE / Jakarta EE technologies and migrating existing Java applications to microservices. KumuluzEE packages microservices as standalone JARs. KumuluzEE microservices are lightweight and optimized for size and start-up time. They fit perfectly with Docker containers. <br /><br />KumuluzEE also provides extensions for developing common patterns in cloud native architectures, including configuration, logging, discovery, circuit-breakers, metrics, security, event streaming and more.",
        links: [
            {
                title: "View all projects",
                url: "/projects",
                external: false
            },
            {
                title: "View MicroProfile specification",
                url: MICROPROFILE_URL,
                external: true
            }
        ]
    },
    {
        image: javaEEMicroservicesImage,
        title: "Microservices with Java EE",
        description: "A standard approach for deploying Java EE applications is packing all components into a single EAR/WAR archive and deploying the archive on the application server. This leads to monolithic architectures which make applications difficult to maintain and scale in cloud (PaaS) environments. The microservice architecture addresses these shortcomings by decomposing an application into a set of stateless microservices. Each microservice has a well-defined functionality and an interface for communication with other services.",
        links: [
            {
                title: "Explore the tutorials",
                url: "/tutorials",
                external: false
            },
            {
                title: "Quickstart development with online pom generator",
                url: "/generator",
                external: false
            }
        ]
    },
    {
        image: fullyCloudImage,
        title: "Main features",
        description: "KumuluzEE allows you to decompose Java applications into microservices and prepare them for the cloud-native architecture. It allows you to create standalone lightweight Java and Java EE / Jakarta EE microservices that can be efficiently deployed, executed and scaled in the cloud on PaaS and Docker-like environments or as standalone applications. It also supports other languages, such as Node.js, Go, and others. <br /><br />KumuluzEE microservices have minimal footprint and require minimal or no configuration. KumuluzEE automates the tasks, related to the deployment and configuration of Java microservices, thus overcoming the major drawback of the microservice architecture and eliminating the need for an application server.",
        links: []
    }
];

export class WhatIsKumuluzComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderLink(link) {
        if (link.external) {
            return (
                <a href={link.url} target="_blank">
                    <span>
                        {link.title}
                    </span>
                    <img src={whiteCaretImage}/>
                </a>
            )
        }
        return (
            <Link to={link.url}>
                <span>
                    {link.title}
                </span>
                <img src={whiteCaretImage}/>
            </Link>
        )
    }

    render() {
        const {} = this.props;

        return (
            <div className="ee-what-kumuluz-component">
                {boxes.map((box, index) => (
                    <div className="box-item" key={index}>
                        <div className="box-image">
                            <img src={box.image} />
                        </div>
                        <div className="box-content">
                            <div className="box-content-title">
                                <h2>
                                    {box.title}
                                </h2>
                            </div>
                            <div className="box-content-desc">
                                <p dangerouslySetInnerHTML={{__html: box.description}} />
                            </div>
                            <div className="box-content-links">
                                {box.links.map((link, indexLink) => (
                                    <div className="box-content-link" key={indexLink}>
                                        {this.renderLink(link)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

}
