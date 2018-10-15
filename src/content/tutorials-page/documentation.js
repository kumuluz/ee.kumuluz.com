import {Sample} from "./schema/sample.class";

export const documentationItems = {
    microservice: {
        header: [
            new Sample("KumuluzEE", "Lightweight open-source framework for developing microservices using standard Java EE technologies and migrating Java EE to cloud-native architecture.", "https://github.com/kumuluz/kumuluzee/blob/master/README.md"),
            new Sample("KumuluzEE wiki", "Explore KumuluzEE samples. Read about configuration support. Read about TLS/SSL support. Read about Uber JAR support.", "https://github.com/kumuluz/kumuluzee/wiki"),
            new Sample("Uber JAR support", "Uber JAR support - Pack and run microservice as uber JAR", "https://github.com/kumuluz/kumuluzee/wiki/Uber-JAR-support")
        ],
        body: [
            new Sample("KumuluzEE Config", "File and environment variables", "https://github.com/kumuluz/kumuluzee/wiki/Configuration"),
            new Sample("KumuluzEE Config with config server", "Config server etcd/Consul", "https://github.com/kumuluz/kumuluzee-config/blob/master/README.md"),
            new Sample("KumuluzEE REST", "For implementation of common, advanced and flexible REST API functionalities and patterns. Includes support for exposing JPA entities through REST", "https://github.com/kumuluz/kumuluzee-rest/blob/master/README.md"),
            new Sample("KumuluzEE Logs", "For advanced microservice framework for logging", "https://github.com/kumuluz/kumuluzee-logs/blob/master/README.md"),
            new Sample("KumuluzEE Discovery", "For dynamic service discovery (etcd or Consul). Fully compatible with Kubernetes", "https://github.com/kumuluz/kumuluzee-discovery/blob/master/README.md"),
            new Sample("KumuluzEE Metrics", "For easy collection and reporting of performance metrics", "https://github.com/kumuluz/kumuluzee-metrics/blob/master/README.md"),
            new Sample("KumuluzEE Security", "For easy integration with OAuth2/OpenID identity and access management providers", "https://github.com/kumuluz/kumuluzee-security/blob/master/README.md"),
            new Sample("KumuluzEE Health", "For implementing health checks and exposing microservice health information", "https://github.com/kumuluz/kumuluzee-health/blob/master/README.md"),
            new Sample("KumuluzEE Fault Tolerance", "For implementing fault tolerance patterns with microservices including circuit breakers and decoupling microservices", "https://github.com/kumuluz/kumuluzee-fault-tolerance/blob/master/README.md"),
            new Sample("KumuluzEE Event Streaming", "For event streaming support using Apache Kafka", "https://github.com/kumuluz/kumuluzee-streaming/blob/master/README.md"),
            new Sample("KumuluzEE CORS", "For Cross-Origin Resource Sharing (CORS) support", "https://github.com/kumuluz/kumuluzee-cors/blob/master/README.md"),
            new Sample("KumuluzEE Swagger", "KumuluzEE Swagger project provides powerful tools to incorporate and visualize the Swagger (OpenAPI 2.0) specification to your microservice.", "https://github.com/kumuluz/kumuluzee-swagger/blob/master/README.md"),
            new Sample("KumuluzEE OpenAPI", "KumuluzEE OpenAPI project provides powerful tools to incorporate and visualize the OpenAPI 3 specification to your microservice.", "https://github.com/kumuluz/kumuluzee-openapi/blob/master/README.md"),
            new Sample("KumuluzEE Reactive", "KumuluzEE Reactive project for developing reactive microservices.", "https://github.com/kumuluz/kumuluzee-reactive/blob/master/README.md"),
            new Sample("KumuluzEE gRPC", "Support for the gRPC framework.", "https://github.com/kumuluz/kumuluzee-grpc/blob/master/README.md", true),
            new Sample("KumuluzEE GraphQL", "Developing GraphQL APIs.", "https://github.com/kumuluz/kumuluzee-graphql/blob/master/README.md", true),
            new Sample("KumuluzEE Ethereum", "Support for seamless development of Blockchain applications on the Ethereum platform.", "https://github.com/kumuluz/kumuluzee-ethereum/blob/master/README.md", true)
        ]
    },
    microprofile: [
        new Sample("MicroProfile Config 1.2", "For microservice configuration.", "https://github.com/kumuluz/kumuluzee-config-mp/blob/master/README.md"),
        new Sample("MicroProfile Health Check 1.0", "For service healthchecks.", "https://github.com/kumuluz/kumuluzee-health/blob/master/README.md"),
        new Sample("MicroProfile Fault Tolerance 1.0", "For fault tolerant microservices.", "https://github.com/kumuluz/kumuluzee-fault-tolerance/blob/master/README.md"),
        new Sample("MicroProfile Metrics 1.1", "For collection and reporting of performance metrics.", "https://github.com/kumuluz/kumuluzee-metrics/blob/master/README.md"),
        new Sample("MicroProfile JWT Authentication 1.0", "For role based access control using OpenID Connect and JSON Web Tokens.", "https://github.com/kumuluz/kumuluzee-jwt-auth/blob/master/README.md")
    ]
};