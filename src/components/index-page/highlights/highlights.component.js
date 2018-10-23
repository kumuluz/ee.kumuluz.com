import React, {Component} from "react";

import "./highlights.component.scss";

import fastestStartupImage from "../../../assets/images/fastest-startup.svg";
import fullyCloudImage from "../../../assets/images/fully-cloud.svg";
import optimizedDockerImage from "../../../assets/images/optimized-docker.svg";
import smallestJarImage from "../../../assets/images/smallest-jar.svg";

const badges = [
    {
        title: "Fastest start-up",
        image: fastestStartupImage
    },
    {
        title: "Smallest JAR",
        image: smallestJarImage
    },
    {
        title: "Fully cloud-native",
        image: fullyCloudImage
    },
    {
        title: "Optimized for Docker and Kubernetes",
        image: optimizedDockerImage
    },

];

export class HighlightsComponent extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-highlights-component">
                <h1>HIGHLIGHTS</h1>
                <p>
                    Full support for Java SE and EE (Jakarta EE) with support for other languages,
                    including Node.js and Go.
                </p>
                <div className="highlights-badges">
                    {badges.map((badge, index) => (
                        <div className="badge" key={index}>
                            <div className="badge-image">
                                <img src={badge.image}/>
                            </div>
                            <div>{badge.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}
