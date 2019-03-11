import {Sample} from "./schema/sample.class";

export const kumuluzeeProjects = [
    new Sample("Logs sample using Log4j2 implementation", "Build a REST service which utilizes a built-in logging framework with Log4j2 implementation to log basic metrics and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-logs-log4j2"),
    new Sample("Logs sample with JUL implementation", "Build a REST service which utilizes a built-in logging framework with JUL implementation to log basic metrics and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-logs-jul"),
    new Sample("Config sample for built-in configuration sources", "Build a REST service which utilizes a build-in configuration framework to access environmental variables and configuration files and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config"),
    new Sample("Config sample with etcd", "Build a REST service which utilizes KumuluzEE Config to access configuration properties stored in etcd and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-etcd"),
    new Sample("Config sample with Consul", "Build a REST service which utilizes KumuluzEE Config to access configuration properties stored in Consul and pack it as a KumuluzEE microservice", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-consul"),
    new Sample("Security sample with Keycloak", "Build a REST service which utilizes KumuluzEE OAuth2 to secure the resources with Keycloak using standard Java annotations and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-security-keycloak"),
    new Sample("Security CDI sample with Keycloak", "Build a CDI enabled REST service which utilizes KumuluzEE Security to secure the resources with Keycloak using standard Java annotations and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-security-cdi-keycloak"),
    new Sample("Discovery - register service with etcd", "Develop a REST KumuluzEE microservice and register it with etcd.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd/discovery-etcd-register"),
    new Sample("Discovery - discover services in servlet with etcd", "Develop a KumuluzEE servlet that discovers a microservice registered with etcd.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd/discovery-etcd-discover-servlet"),
    new Sample("Discovery - discover services in JAX-RS service with etcd", "Develop a REST service that discovers a microservice registered with etcd.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd/discovery-etcd-discover-jaxrs"),
    new Sample("Discovery - Kubernetes sample with etcd", "Deploy KumuluzEE microservices, which use Service Discovery to Kubernetes cluster.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd/discovery-etcd-kubernetes"),
    new Sample("Discovery - register service with Consul", "Develop a REST KumuluzEE microservice and register it with Consul.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-consul/discovery-consul-register"),
    new Sample("Discovery - discover services in servlet with Consul", "Develop a KumuluzEE servlet that discovers a microservice registered with Consul.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-consul/discovery-consul-discover-servlet"),
    new Sample("Discovery - discover services in JAX-RS service with Consul", "Develop a REST service that discovers a microservice registered with Consul.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-consul/discovery-consul-discover-jaxrs"),
    new Sample("Event Streaming with Kafka - produce Kafka messages", "Develop a REST service that produces Kafka messages to selected topic.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-streaming-kafka/kumuluzee-streaming-kafka-producer"),
    new Sample("Event Streaming with Kafka - consume Kafka messages", "Develop a REST service that consumes Kafka messages of selected topic.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-streaming-kafka/kumuluzee-streaming-kafka-consumer"),
    new Sample("REST Sample", "Expand the KumuluzEE JPA and CDI sample with REST query parameters.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-rest"),
    new Sample("CORS sample", "Develop a microservice application with suport fot Cross Origin.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-cors"),
    new Sample("Fault Tolerance sample with Hystrix", "Build a REST service which utilizes KumuluzEE Faul Tolerance to provide fault tolerance and latency tolerance to your code using the fault tolerance patterns in a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-fault-tolerance-hystrix"),
    new Sample("Metrics sample", "Build a REST service, pack it as a KumuluzEE microservice, and monitor its performance with KumuluzEE Metrics.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-metrics"),
    new Sample("Health sample", "Build a REST service which utilizes a built-in health framework to expose a health check and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-health"),
    new Sample("MicroProfile Config sample", "Build a JAX-RS service that utilizes the KumuluzEE MicroProfile Config API implementation to access configuration values and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-mp"),
    new Sample("Swagger sample", "Develop a microservice application with support for Swagger specification.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-swagger"),
    new Sample("OpenAPI sample", "Develop a microservice application with support for OpenAPI specification.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-openapi"),
    new Sample("Microservices with KumuluzEE MicroProfile 1.2", "Build a microservice with Eclipse MicroProfile APIs implemented in KumuluzEE MicroProfile 1.2.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-microProfile-1.2"),
    new Sample("Reactive samples using Vert.x", "Samples for KumuluzEE Reactive Vert.x project.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-reactive-vertx"),
    new Sample("gRPC sample", "Samples for KumuluzEE gRPC project.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-grpc"),
    new Sample("GraphQL sample", "Samples for KumuluzEE GraphQL project.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-graphql-advanced"),
    new Sample("Ethereum sample", "Samples for KumuluzEE Ethereum project.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-ethereum-web3j"),
    new Sample("Rest Client sample", "Build a REST service, which consumes another REST service using the KumuluzEE Rest Client.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-rest-client", true),
    new Sample("OpenTracing sample", "Trace a request across two microservices using Jaeger or Zipkin as the backend.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-opentracing", true),
    new Sample("AMQP sample with RabbitMQ", "Produce and consume AMQP messages using the RabbitMQ message broker.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-amqp-rabbitmq", true),
];

export const kumuluzeeNodejsProjects = [
    new Sample("Node.js Config sample", "Build a REST service which utilizes Node.js configuration project.", "https://github.com/kumuluz/kumuluzee-nodejs-samples/tree/master/kumuluzee-nodejs-config"),
    new Sample("Node.js Discovery sample", "Develop a Node.js microservice and register it with Consul or etcd.", "https://github.com/kumuluz/kumuluzee-nodejs-samples/tree/master/kumuluzee-nodejs-discovery"),
];

export const kumuluzeeGoProjects = [
    new Sample("Go Config sample", "Build a REST service which utilizes Go configuration project.", "https://github.com/kumuluz/kumuluzee-go-samples/tree/master/kumuluzee-go-config"),
    new Sample("Go Discovery sample", "Develop a Go microservice and register it with Consul or etcd.", "https://github.com/kumuluz/kumuluzee-go-samples/tree/master/kumuluzee-go-discovery"),
];