import {Project} from "./schema/project.class";

export const projectsList = [
    new Project("KumuluzEE microservice framework", "For creating microservices using Java EE and packing them as Docker containers. Includes a configuration framework and uber-JAR support.", "https://github.com/kumuluz/kumuluzee/blob/master/README.md", 2),
    new Project("KumuluzEE REST", "For implementation of common, advanced and flexible REST API functionalities and patterns. Includes support for exposing JPA entities through REST.", "https://github.com/kumuluz/kumuluzee-rest/blob/master/README.md"),
    new Project("KumuluzEE Config", "For dynamic centralized configuration (using ENV variables or config server, such as etcd or Consul).", "https://github.com/kumuluz/kumuluzee-config/blob/master/README.md"),
    new Project("KumuluzEE Logs", "For advanced microservice framework for logging.", "https://github.com/kumuluz/kumuluzee-logs/blob/master/README.md"),
    new Project("KumuluzEE Discovery", "For dynamic service discovery (etcd or Consul). Fully compatible with Kubernetes.", "https://github.com/kumuluz/kumuluzee-discovery/blob/master/README.md"),
    new Project("KumuluzEE Metrics", "For easy collection and reporting of performance metrics.", "https://github.com/kumuluz/kumuluzee-metrics/blob/master/README.md"),
    new Project("KumuluzEE Security", "For easy integration with OAuth2/OpenID identity and access management providers.", "https://github.com/kumuluz/kumuluzee-security/blob/master/README.md"),
    new Project("KumuluzEE Health", "For implementing health checks and exposing microservice health information.", "https://github.com/kumuluz/kumuluzee-health/blob/master/README.md"),
    new Project("KumuluzEE Fault Tolerance", "For implementing fault tolerance patterns, circuit-breakers, and decoupling microservices.", "https://github.com/kumuluz/kumuluzee-fault-tolerance/blob/master/README.md"),
    new Project("KumuluzEE Event Streaming", "For event streaming support using Apache Kafka.", "https://github.com/kumuluz/kumuluzee-streaming/blob/master/README.md"),
    new Project("KumuluzEE Reactive", "For integration of reactive streams (Vert.x, ReactiveX).", "https://github.com/kumuluz/kumuluzee-reactive/blob/master/README.md"),
    new Project("KumuluzEE CORS", "For Cross-Origin Resource Sharing (CORS) support.", "https://github.com/kumuluz/kumuluzee-cors/blob/master/README.md"),
    new Project("KumuluzEE Swagger", "For Swagger (OpenAPI 2) support and visualization.", "https://github.com/kumuluz/kumuluzee-swagger/blob/master/README.md"),
    new Project("KumuluzEE OpenAPI", "For OpenaAPI 3 support, interface generation and visualization.", "https://github.com/kumuluz/kumuluzee-openapi/blob/master/README.md"),
    new Project("KumuluzEE Testing", "Tools and utilities for testing KumuluzEE microservices.", "https://github.com/kumuluz/kumuluzee-testing/blob/master/README.md"),
    new Project("KumuluzEE gRPC", "Native support for gRPC based services.", "https://github.com/kumuluz/kumuluzee-grpc/blob/master/README.md"),
    new Project("KumuluzEE GraphQL", "Native support for GraphQL.", "https://github.com/kumuluz/kumuluzee-graphql/blob/master/README.md"),
    new Project("KumuluzEE Ethereum", "For Ethereum-enabled microservices.", "https://github.com/kumuluz/kumuluzee-ethereum/blob/master/README.md")
];
