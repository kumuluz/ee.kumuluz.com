import React, {Component} from "react";

import "./why-kumuluz.component.scss";
import {BLOG_URL} from "../../../content/constants.content";

const reasons = [
    {
        title: "Pure JavaEE microservices",
        text: "Develop pure Java/JavaEE/JakartaEE based microservices using standard Java EE APIs and technologies and pack and execute them as stand-alone (Fat/Uber) JARs."
    },
    {
        title: "Configurable environments",
        text: "KumuluzEE is not a traditional Java EE app server, neither does it embed an app-server inside microservices. It provides configurable Java EE environment inside stand-alone JARs, which only require JRE (Java Runtime Environment) to execute."
    },
    {
        title: "Standard EE APIs and tech",
        text: "Develop microservices using standard Java EE APIs and technologies."
    },
    {
        title: "Open source",
        text: "KumuluzEE is fully open, standard-based and extensible."
    },
    {
        title: "Leverage your existing knowledge",
        text: "Leverage your existing Java knowledge and extend it to gradually migrate existing Java and Java EE applications to microservices and cloud-native architecture with common cloud-native patterns."
    },
    {
        title: "Zero lock-in",
        text: "KumuluzEE is not for Java only. In addition to Java it provides support for Node.js and Go, with other languages coming soon."
    },
    {
        title: "Easy migration",
        text: "Gradually migrate existing Java EE applications to microservices and cloud-native architecture."
    },
    {
        title: "Extended microservices",
        text: "KumuluzEE allows you to extend your microservices with common cloud-native patterns."
    },
    {
        title: "Fastest start-up & small footprint",
        text: "KumuluzEE generates pure, efficient Java microservices, which start considerably faster and have lower footprint than the majority of other Java microservice frameworks. Microservices are lightweight with small footprint, rapid start and container-ready."
    },
    {
        title: "Full cloud-native architecture and more",
        text: "KumuluzEE provides full support for configuration, service discovery, health, logging, security, fault tolerance, circuit-breakers, event streaming, metrics, REST patterns and more. KumuluzEE microservices provide first-class support for API gateways. KumuluzEE also supports gRPC, GraphQL, Blockchain, event streaming and many other advanced technologies."
    },
    {
        title: "Classical Java EE application server",
        text: "Part of your application can run as microservices and the rest of the application can continue to operate on your classical Java EE application server. KumuluzEE provides full interoperability for container authentication, CDI, remote EJB calls, remote JMS, data sources, etc."
    },
    {
        title: "Support for gradual migration",
        text: "KumuluzEE provides full support for gradual migration of existing Java EE applications to the microservice architecture. Step-by-step migration is supported so that you can extract one or more services from existing application and migrate them to microservices."
    }
];

export class WhyKumuluzComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-why-kumuluz-component">
                <div className="reasons">
                    {reasons.map((reason, index) => (
                        <div className="reason-item" key={index}>
                            <div className="reason-title">
                                {reason.title}
                            </div>
                            <div className="reason-text">
                                {reason.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="blog-link">
                    Read more about it on&#160;
                    <a href={BLOG_URL} target="_blank" rel="noreferrer noopener">our blog!</a>
                </div>
            </div>
        );
    }

}
