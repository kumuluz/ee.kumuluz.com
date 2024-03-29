import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const extensionsList = {
    config: [
        new CheckboxModel("ext-config-etcd", [
            new VersionedLabel("2.3.0", "*", "with etcd", "com.kumuluz.ee.config:kumuluzee-config-etcd:${kumuluzee-config.version}:1.2.0"),
            new VersionedLabel("3.8.0", "*", "with etcd", "com.kumuluz.ee.config:kumuluzee-config-etcd:${kumuluzee-config.version}:1.2.1"),
            new VersionedLabel("3.9.0", "*", "with etcd", "com.kumuluz.ee.config:kumuluzee-config-etcd:${kumuluzee-config.version}:1.3.0"),
        ], []),
        new CheckboxModel("ext-config-consul", [
            new VersionedLabel("2.3.0", "*", "with Consul", "com.kumuluz.ee.config:kumuluzee-config-consul:${kumuluzee-config.version}:1.2.0"),
            new VersionedLabel("3.8.0", "*", "with Consul", "com.kumuluz.ee.config:kumuluzee-config-consul:${kumuluzee-config.version}:1.2.1"),
            new VersionedLabel("3.9.0", "*", "with Consul", "com.kumuluz.ee.config:kumuluzee-config-consul:${kumuluzee-config.version}:1.3.0"),
        ], []),
        new CheckboxModel("ext-config-zookeeper", [
            new VersionedLabel("3.9.0", "*", "with ZooKeeper", "com.kumuluz.ee.config:kumuluzee-config-zookeeper:${kumuluzee-config.version}:1.3.0"),
        ], [])
    ],
    discovery: [
        new CheckboxModel("ext-discovery-etcd", [
            new VersionedLabel("2.3.0", "*", "with etcd", "com.kumuluz.ee.discovery:kumuluzee-discovery-etcd:${kumuluzee-discovery.version}:1.1.1")
        ], []),
        new CheckboxModel("ext-discovery-consul", [
            new VersionedLabel("2.3.0", "*", "with Consul", "com.kumuluz.ee.discovery:kumuluzee-discovery-consul:${kumuluzee-discovery.version}:1.1.1")
        ], [])
    ],
    logs: [
        new CheckboxModel("ext-logs-jul", [
            new VersionedLabel("2.2.0", "*", "with Jul", "com.kumuluz.ee.logs:kumuluzee-logs-jul:${kumuluzee-logs.version}:1.3.1"),
            new VersionedLabel("3.8.0", "*", "with Jul", "com.kumuluz.ee.logs:kumuluzee-logs-jul:${kumuluzee-logs.version}:1.4.0"),
            new VersionedLabel("3.10.0", "*", "with Jul", "com.kumuluz.ee.logs:kumuluzee-logs-jul:${kumuluzee-logs.version}:1.4.4"),
            new VersionedLabel("3.12.0", "*", "with Jul", "com.kumuluz.ee.logs:kumuluzee-logs-jul:${kumuluzee-logs.version}:1.4.6"),
        ], []),
        new CheckboxModel("ext-logs-log4j2", [
            new VersionedLabel("2.2.0", "*", "with Log4j2", "com.kumuluz.ee.logs:kumuluzee-logs-log4j2:${kumuluzee-logs.version}:1.3.1"),
            new VersionedLabel("3.8.0", "*", "with Log4j2", "com.kumuluz.ee.logs:kumuluzee-logs-log4j2:${kumuluzee-logs.version}:1.4.0"),
            new VersionedLabel("3.10.0", "*", "with Log4j2", "com.kumuluz.ee.logs:kumuluzee-logs-log4j2:${kumuluzee-logs.version}:1.4.4"),
            new VersionedLabel("3.12.0", "*", "with Log4j2", "com.kumuluz.ee.logs:kumuluzee-logs-log4j2:${kumuluzee-logs.version}:1.4.6"),
        ], []),
        new CheckboxModel("ext-logs-fluent", [
            new VersionedLabel("3.8.0", "*", "with Fluentd", "com.kumuluz.ee.logs:kumuluzee-logs-fluentd:${kumuluzee-logs.version}:1.4.0"),
            new VersionedLabel("3.10.0", "*", "with Fluentd", "com.kumuluz.ee.logs:kumuluzee-logs-fluentd:${kumuluzee-logs.version}:1.4.4"),
            new VersionedLabel("3.12.0", "*", "with Fluentd", "com.kumuluz.ee.logs:kumuluzee-logs-fluentd:${kumuluzee-logs.version}:1.4.6"),
        ])
    ],
    opentracing: [
        new CheckboxModel("ext-opentracing-jaeger", [
            new VersionedLabel("2.5.3", "*", "with Jaeger", "com.kumuluz.ee.opentracing:kumuluzee-opentracing-jaeger:${kumuluzee-opentracing.version}:1.2.1"),
            new VersionedLabel("3.1.0", "*", "with Jaeger", "com.kumuluz.ee.opentracing:kumuluzee-opentracing-jaeger:${kumuluzee-opentracing.version}:1.3.1")
        ], []),
        new CheckboxModel("ext-opentracing-zipkin", [
            new VersionedLabel("2.5.3", "*", "with Zipkin", "com.kumuluz.ee.opentracing:kumuluzee-opentracing-zipkin:${kumuluzee-opentracing.version}:1.2.1"),
            new VersionedLabel("3.1.0", "*", "with Zipkin", "com.kumuluz.ee.opentracing:kumuluzee-opentracing-zipkin:${kumuluzee-opentracing.version}:1.3.1")
        ], [])
    ],
    metrics: {
        level1: [
            new CheckboxModel("ext-metrics", [
                new VersionedLabel("2.4.0", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:1.1.2"),
                new VersionedLabel("3.3.0", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:1.1.3"),
                new VersionedLabel("3.4.1", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:2.0.1"),
                new VersionedLabel("3.6.0", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:2.1.0"),
                new VersionedLabel("3.7.0", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:2.2.1"),
                new VersionedLabel("3.9.0", "*", "KumuluzEE Metrics", "com.kumuluz.ee.metrics:kumuluzee-metrics-core:${kumuluzee-metrics.version}:2.3.0"),
            ], [])
        ],
        level2: [
            new CheckboxModel("ext-metrics-logs", [
                new VersionedLabel("2.4.0", "*", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "*", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:1.1.2"),
                new VersionedLabel("3.3.0", "*", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:1.1.3"),
                new VersionedLabel("3.4.1", "*", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:2.0.1"),
                new VersionedLabel("3.9.0", "*", "KumuluzEE Logs reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logs:${kumuluzee-metrics.version}:2.3.0"),
            ], []),
            new CheckboxModel("ext-metrics-logstash", [
                new VersionedLabel("2.4.0", "*", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:1.1.1"),
                new VersionedLabel("2.5.3", "*", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:1.1.2"),
                new VersionedLabel("3.3.0", "*", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:1.1.3"),
                new VersionedLabel("3.4.1", "*", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:2.0.1"),
                new VersionedLabel("3.9.0", "*", "Logstash reporter", "com.kumuluz.ee.metrics:kumuluzee-metrics-logstash:${kumuluzee-metrics.version}:2.3.0"),
            ], [])
        ]
    },
    reactive: [
        new CheckboxModel("ext-vert-x", [
            new VersionedLabel("2.5.2", "*", "Vert.x", "com.kumuluz.ee.reactive:kumuluzee-reactive-vertx:${kumuluzee.reactive-vertx.version}:1.0.0")
        ], [])
    ],
    arquillian: [
        new CheckboxModel("ext-arq-junit", [
            new VersionedLabel("2.5.3", "*", "with jUnit", "n/a")
        ], []),
        new CheckboxModel("ext-arq-testng", [
            new VersionedLabel("2.5.3", "*", "with TestNG", "n/a")
        ], [])
    ],
    other: [
        new CheckboxModel("ext-other-keycloak", [
            new VersionedLabel("2.3.0", "*", "KumuluzEE Security (Keycloak)", "com.kumuluz.ee.security:kumuluzee-security-keycloak:${kumuluzee-security.version}:1.1.0"),
            new VersionedLabel("3.9.0", "*", "KumuluzEE Security (Keycloak)", "com.kumuluz.ee.security:kumuluzee-security-keycloak:${kumuluzee-security.version}:1.2.0"),
        ], []),
        new CheckboxModel("ext-other-kafka", [
            new VersionedLabel("2.3.0", "*", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.0.0"),
            new VersionedLabel("3.0.0", "*", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.1.0"),
            new VersionedLabel("3.0.0", "*", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.2.0"),
            new VersionedLabel("3.11.0", "*", "KumuluzEE Event Streaming (Kafka)", "com.kumuluz.ee.streaming:kumuluzee-streaming-kafka:${kumuluzee-streaming.version}:1.2.2"),
        ], []),
        new CheckboxModel("ext-other-rest", [
            new VersionedLabel("2.3.0", "*", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.2.3"),
            new VersionedLabel("3.9.0", "*", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.3.0"),
            new VersionedLabel("3.10.0", "*", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.3.1"),
            new VersionedLabel("3.11.0", "*", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.4.0"),
            new VersionedLabel("3.12.0", "*", "KumuluzEE REST", "com.kumuluz.ee.rest:kumuluzee-rest-core:${kumuluzee-rest.version}:1.5.1"),
        ], []),
        new CheckboxModel("ext-other-cors", [
            new VersionedLabel("2.4.0", "*", "KumuluzEE CORS", "com.kumuluz.ee.cors:kumuluzee-cors:${kumuluzee-cors.version}:1.0.5"),
            new VersionedLabel("3.9.0", "*", "KumuluzEE CORS", "com.kumuluz.ee.cors:kumuluzee-cors:${kumuluzee-cors.version}:1.0.6"),
        ], []),
        new CheckboxModel("ext-other-health", [
            new VersionedLabel("2.4.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:1.0.1"),
            // Two extension versions with same min and max kumuluzee versions is not supported
            // new VersionedLabel("3.1.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:1.0.2"),
            new VersionedLabel("3.1.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:2.1.1"),
            new VersionedLabel("3.9.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:2.2.0"),
            new VersionedLabel("3.10.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:2.3.0"),
            new VersionedLabel("3.11.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:2.4.0"),
            new VersionedLabel("3.12.0", "*", "KumuluzEE Health", "com.kumuluz.ee.health:kumuluzee-health:${kumuluzee-health.version}:2.4.3"),
        ], []),
        new CheckboxModel("ext-other-faulttolerance", [
            new VersionedLabel("2.4.0", "*", "KumuluzEE Fault Tolerance (including circuit breakers)", "com.kumuluz.ee.fault.tolerance:kumuluzee-fault-tolerance-hystrix:${kumuluzee-fault-tolerance.version}:1.1.3"),
            new VersionedLabel("3.0.0", "*", "KumuluzEE Fault Tolerance (including circuit breakers)", "com.kumuluz.ee.fault.tolerance:kumuluzee-fault-tolerance-smallrye:${kumuluzee-fault-tolerance.version}:2.0.0"),
            new VersionedLabel("3.9.0", "*", "KumuluzEE Fault Tolerance (including circuit breakers)", "com.kumuluz.ee.fault.tolerance:kumuluzee-fault-tolerance-smallrye:${kumuluzee-fault-tolerance.version}:2.1.0"),
            new VersionedLabel("3.10.0", "*", "KumuluzEE Fault Tolerance (including circuit breakers)", "com.kumuluz.ee.fault.tolerance:kumuluzee-fault-tolerance-smallrye:${kumuluzee-fault-tolerance.version}:2.1.1"),
        ], []),
        new CheckboxModel("ext-other-swagger", [
            new VersionedLabel("3.0.0", "*", "KumuluzEE Swagger", "com.kumuluz.ee.swagger:kumuluzee-swagger:${kumuluzee-swagger.version}:1.2.2"),
            new VersionedLabel("2.2.0", "*", "KumuluzEE Swagger", "com.kumuluz.ee.swagger:kumuluzee-swagger:${kumuluzee-swagger.version}:1.0.0-SNAPSHOT")
        ], []),
        new CheckboxModel("ext-other-openapi", [
            new VersionedLabel("3.0.0", "*", "KumuluzEE OpenAPI", "com.kumuluz.ee.openapi:kumuluzee-openapi:${kumuluzee-openapi.version}:1.0.1"),
            new VersionedLabel("2.2.0", "*", "KumuluzEE OpenAPI", "com.kumuluz.ee.openapi:kumuluzee-openapi:${kumuluzee-openapi.version}:1.0.0-SNAPSHOT")
        ], []),
        new CheckboxModel("ext-other-grpc", [
            new VersionedLabel("3.0.0", "*", "KumuluzEE gRPC", "com.kumuluz.ee.grpc:kumuluzee-grpc:${kumuluzee-grpc.version}:1.1.0")
        ], []),
        new CheckboxModel("ext-other-graphql", [
            new VersionedLabel("3.0.0", "*", "KumuluzEE GraphQL", "com.kumuluz.ee.graphql:kumuluzee-graphql:${kumuluzee-graphql.version}:1.0.2"),
            new VersionedLabel("3.10.0", "*", "KumuluzEE GraphQL", "com.kumuluz.ee.graphql:kumuluzee-graphql:${kumuluzee-graphql.version}:1.0.3"),
            new VersionedLabel("3.11.0", "*", "KumuluzEE GraphQL", "com.kumuluz.ee.graphql:kumuluzee-graphql-mp:${kumuluzee-graphql-mp.version}:1.1.0"),
        ], []),
        new CheckboxModel("ext-other-amqp", [
            // new VersionedLabel("3.2.0", "*", "KumuluzEE AMQP", "com.kumuluz.ee.amqp:kumuluzee-amqp-rabbitmq:${kumuluzee-amqp.version}:1.0.0-SNAPSHOT"),
            new VersionedLabel("3.10.0", "*", "KumuluzEE AMQP", "com.kumuluz.ee.amqp:kumuluzee-amqp-rabbitmq:${kumuluzee-amqp.version}:1.0.0"),
        ], []),
        new CheckboxModel("ext-other-feature-flags", [
            new VersionedLabel("3.2.0", "*", "KumuluzEE Feature Flags", "com.kumuluz.ee.feature-flags:kumuluzee-feature-flags-unleash:${kumuluzee-feature-flags.version}:1.0.0-SNAPSHOT")
        ], []),
        new CheckboxModel("ext-other-version", [
            new VersionedLabel("3.2.0", "*", "KumuluzEE Version", "com.kumuluz.ee.version:kumuluzee-version:${kumuluzee-version.version}:1.1.0"),
            new VersionedLabel("3.2.0", "*", "KumuluzEE Version", "com.kumuluz.ee.version:kumuluzee-version:${kumuluzee-version.version}:1.0.0"),
        ], []),
        new CheckboxModel("ext-other-jcache", [
            new VersionedLabel("3.12.0", "*", "KumuluzEE JCache", "com.kumuluz.ee.jcache:kumuluzee-jcache-caffeine:${kumuluzee-jcache.version}:1.0.0")
        ], []),
        new CheckboxModel("ext-other-migrations-liquibase", [
            new VersionedLabel("3.10.0", "*", "KumuluzEE Database Schema Migrations (Liquibase)", "com.kumuluz.ee.database-schema-migrations:kumuluzee-database-schema-migrations-liquibase:${kumuluzee-database-schema-migrations.version}:1.0.0")
        ], []),
    ]
};

export const testingExtensionDependencies = {
    kumuluzTesting: {
        groupId: "com.kumuluz.ee.testing",
        artifactId: "kumuluzee-arquillian-container",
        versionKey: "${kumuluzee-arquillian-container.version}",
        version: "1.1.1",
        scope: "test"
    },
    arquillianBOMVersion: {
        versionKey: "${arquillian.version}",
        version: "1.6.0.Final"
    },
    junit: {
        groupId: "junit",
        artifactId: "junit",
        versionKey: "${junit.version}",
        version: "4.13.2",
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
        version: "7.4.0",
        scope: "test"
    }
};

export const graphQLUiDependencies = {
    "1.0.0": {
        groupId: "com.kumuluz.ee.graphql",
        artifactId: "kumuluzee-graphql-ui",
        versionKey: "${kumuluzee-graphql.version}",
    },
    "1.1.0": {
        groupId: "com.kumuluz.ee.graphql",
        artifactId: "kumuluzee-graphql-ui",
        versionKey: "${kumuluzee-graphql-mp.version}",
    }
};
