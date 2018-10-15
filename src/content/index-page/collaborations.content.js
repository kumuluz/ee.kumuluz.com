import {Collaboration} from "./schema/collaboration.class";

import dukeAwardImage from "../../assets/images/duke-award.svg";
import microprofileImage from "../../assets/images/microprofile-compliance.svg";
import javanodegoImage from "../../assets/images/javanodego.svg";
import {MICROPROFILE_URL} from "../constants.content";

export const collaborations = [
    new Collaboration("KumuluzEE is Java Duke's Choice Award Winner",
        `KumuluzEE has won the prestigious 2015 Java Duke's Choice Award. The Duke's Choice 
        Award is the Java community equivalent of winning an Oscar. The award celebrates extreme 
        innovation using Java technology.`,
        dukeAwardImage, "duke-award-image"),
    new Collaboration("KumuluzEE is part of MicroProfile",
        `<a href="${MICROPROFILE_URL}" target="_blank">The MicroProfile</a> is a baseline platform definition that optimizes Enterprise Java for a microservices architecture and delivers application portability across multiple MicroProfile runtimes.`,
        microprofileImage, "microprofile-compliance-image"),
    new Collaboration("Supports Java, Java EE / Jakarta EE, Node.js, Go and other languages",
        `KumuluzEE supports Java, Node.js, Go and other programming languages. It also provides support for Blockchain, gRPC, GraphQL and 
        many other advanced technologies.`,
        javanodegoImage, "java-node-go-image")
];
