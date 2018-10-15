import {Opinion} from "./schema/opinion.class";

import person1Image from "../../assets/images/opinions/person1.svg";
import person2Image from "../../assets/images/opinions/person2.svg";
import person3Image from "../../assets/images/opinions/person3.svg";
import person4Image from "../../assets/images/opinions/person4.svg";

export const opinionsList = [
    new Opinion("Harshad Oak", "Java Champion and Founder of Rightrix Solutions and IndicThreads", person2Image, "If you are exploring microservices for Java EE, you need to take a look at KumuluzEE's novel yet simple approach to automating microservices for you."),
    new Opinion("Reza Rahman", "Senior Java Technologist, Author, Speaker", person1Image, "KumuluzEE is a great community effort to power Java EE API based microservices, especially on the cloud."),
    new Opinion("Arun Gupta", "Vice President, Developer Relations at Couchbase", person3Image, "KumuluzEE truly brings microservice architecture to Java EE. Maven-ready, Fat JAR, modularized dependencies, Docker-ready and pluggable web container makes it ready to be deployable in any cloud environment. If you are building apps using Java EE, start your microservice journey with KumuluzEE!"),
    new Opinion("Martijn Verburg", "Java Champion and CEO of jClarity", person4Image, "Although Java EE specifications and application servers have come down in size, it still wasn't a first technology choice for today's micro services developer when compared to say NodeJS or Spring Boot. That's now changed as KumuluzEE brings a light-weight, application server free way of creating micro services with the full power of Java, the JVM and JavaEE behind it! This innovative stack is truly a worthy Duke Awards winner in 2015."),
];
