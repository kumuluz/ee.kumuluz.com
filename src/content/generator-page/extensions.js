import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const extensionsList = {
    config: [
        new CheckboxModel("ext-config-etcd", [
            new VersionedLabel("2.3.0", "with etcd", "com.kumuluz.ee.config:kumuluzee-config-etcd:${kumuluzee-config.version}:1.0.0")
        ], []),
        new CheckboxModel("ext-config-consul", [
            new VersionedLabel("2.3.0", "with Consul", "com.kumuluz.ee.config:kumuluzee-config-consul:${kumuluzee-config.version}:1.0.0")
        ], [])
    ],
    discovery: [
        new CheckboxModel("ext-discovery-etcd", [
            new VersionedLabel("2.3.0", "with etcd", "com.kumuluz.ee.discovery:kumuluzee-discovery-etcd:${kumuluzee-discovery.version}:1.1.0")
        ], []),
        new CheckboxModel("ext-discovery-consul", [
            new VersionedLabel("2.3.0", "with Consul", "com.kumuluz.ee.discovery:kumuluzee-discovery-consul:${kumuluzee-discovery.version}:1.1.0")
        ], [])
    ],
    metrics: {
        level1: [
            new CheckboxModel("ext-metrics", [
                new VersionedLabel("2.4.0", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:1.1.2")
            ], [])
        ],
        level2: [
            new CheckboxModel("ext-metrics-logs", [
                new VersionedLabel("2.4.0", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:1.1.2")
            ], []),
            new CheckboxModel("ext-metrics-logstash", [
                new VersionedLabel("2.4.0", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:1.1.2")
            ], [])
        ]
    },
    reactive: [
        new CheckboxModel("ext-vert-x", [
            new VersionedLabel("2.5.2", "Vert.x", "com.kumuluz.ee.reactive:kumuluzee-reactive-vertx:${kumuluzee.reactive-vertx.version}:1.0.0")
        ], [])
    ],
    arquillian: [
        new CheckboxModel("ext-arq-junit", [
            new VersionedLabel("2.5.3", "with jUnit", "n/a")
        ], []),
        new CheckboxModel("ext-arq-testng", [
            new VersionedLabel("2.5.3", "with TestNG", "n/a")
        ], [])
    ],
    other: [
        new CheckboxModel("ext-other-logs", [
            new VersionedLabel("2.2.0", "KumuluzEE Logs", "com.kumuluz.ee.logs:kumuluzee-logs-log4j2:${kumuluzee-logs.version}:1.0.0")
        ], []),
        new CheckboxModel("ext-other-keycloak", [
            new VersionedLabel("2.3.0", "KumuluzEE Security (Keycloak)", "com.kumuluz.ee.security:kumuluzee-security-keycloak:${kumuluzee-security.version}:1.0.1")
        ], []),
        new CheckboxModel("ext-other-kafka", [
            new VersionedLabel("2.3.0", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.0.0"),
            new VersionedLabel("3.0.0", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.1.0")
        ], []),
        new CheckboxModel("ext-other-rest", [
            new VersionedLabel("2.3.0", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.2.3")
        ], []),
        new CheckboxModel("ext-other-cors", [
            new VersionedLabel("2.4.0", "KumuluzEE CORS", "com.kumuluz.ee.cors:kumuluzee-cors:${kumuluzee-cors.version}:1.0.3")
        ], []),
        new CheckboxModel("ext-other-health", [
            new VersionedLabel("2.4.0", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:1.0.1"),
            new VersionedLabel("3.1.0", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:1.0.2")
        ], []),
        new CheckboxModel("ext-other-faulttolerance", [
            new VersionedLabel("2.4.0", "KumuluzEE Fault Tolerance (including circuit breakers)", "com.kumuluz.ee.fault.tolerance:kumuluzee-fault-tolerance-hystrix:${kumuluzee-fault-tolerance.version}:1.0.0")
        ], []),
        new CheckboxModel("ext-other-swagger", [
            new VersionedLabel("3.0.0", "KumuluzEE Swagger", "com.kumuluz.ee.swagger:kumuluzee-swagger:${kumuluzee-swagger.version}:1.2.0"),
            new VersionedLabel("2.2.0", "KumuluzEE Swagger", "com.kumuluz.ee.swagger:kumuluzee-swagger:${kumuluzee-swagger.version}:1.0.0-SNAPSHOT")
        ], []),
        new CheckboxModel("ext-other-openapi", [
            new VersionedLabel("3.0.0", "KumuluzEE OpenAPI", "com.kumuluz.ee.openapi:kumuluzee-openapi:${kumuluzee-openapi.version}:1.0.0"),
            new VersionedLabel("2.2.0", "KumuluzEE OpenAPI", "com.kumuluz.ee.openapi:kumuluzee-openapi:${kumuluzee-openapi.version}:1.0.0-SNAPSHOT")
        ], []),
        new CheckboxModel("ext-other-grpc", [
            new VersionedLabel("3.0.0", "KumuluzEE gRPC", "com.kumuluz.ee.grpc:kumuluzee-grpc:${kumuluzee-grpc.version}:1.0.0")
        ], []),
        new CheckboxModel("ext-other-graphql", [
            new VersionedLabel("3.0.0", "KumuluzEE GraphQL", "com.kumuluz.ee.graphql:kumuluzee-graphql:${kumuluzee-graphql.version}:1.0.0")
        ], [])
    ]
};

export const testingExtensionDependencies = {
    kumuluzTesting: {
        groupId: "com.kumuluz.ee.testing",
        artifactId: "kumuluzee-arquillian-container",
        versionKey: "${kumuluzee-arquillian-container.version}",
        version: "1.1.0",
        scope: "test"
    },
    arquillianBOMVersion: {
        versionKey: "${arquillian.version}",
        version: "1.4.0.Final"
    },
    junit: {
        groupId: "junit",
        artifactId: "junit",
        versionKey: "${junit.version}",
        version: "4.12",
        scope: "test"
    },
    junitContainer: {
        groupId: "org.jboss.arquillian.junit",
        artifactId: "arquillian-junit-container",
        scope: "test"
    },
    testngContainer: {
        groupId: "org.jboss.arquillian.testng",
        artifactId: "arquillian-testng-container",
        scope: "test"
    },
    testng: {
        groupId: "org.testng",
        artifactId: "testng",
        versionKey: "${testng.version}",
        version: "6.14.3",
        scope: "test"
    }
};
