import {Project} from "./schema/project.class";

/*
    If url is set to '#' then link 'View on GitHub' will not be displayed
 */
export const microprofileList = [
    new Project("Eclipse MicroProfile", "KumuluzEE is fully compliant with Eclipse MicroProfile 1.0, 1.1 and 1.2.", "#", "#", 2),
    new Project("MicroProfile Config 1.2", "For microservice configuration.", "https://github.com/kumuluz/kumuluzee-config-mp/blob/master/README.md", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-mp"),
    new Project("MicroProfile Health Check 1.0", "For service healthchecks.", "https://github.com/kumuluz/kumuluzee-health/blob/master/README.md", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-health"),
    new Project("MicroProfile Fault Tolerance 1.0", "For fault tolerant microservices.", "https://github.com/kumuluz/kumuluzee-fault-tolerance/blob/master/README.md", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-fault-tolerance-hystrix"),
    new Project("MicroProfile Metrics 1.1", "For collection and reporting of performance metrics.", "https://github.com/kumuluz/kumuluzee-metrics/blob/master/README.md", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-metrics"),
    new Project("MicroProfile JWT Authentication 1.0", "For role based access control using OpenID Connect and JSON Web Tokens.", "https://github.com/kumuluz/kumuluzee-jwt-auth/blob/master/README.md", "#"),
    new Project("MicroProfile REST Client 1.0", "Type-safe approach to invoke RESTful services over HTTP.", "https://github.com/kumuluz/kumuluzee-rest-client/blob/master/README.md", "#"),
    new Project("MicroProfile Open Tracing 1.0", "For accessing an OpenTracing compliant Tracer object within your JAX-RS application.", "#", "#")
];
