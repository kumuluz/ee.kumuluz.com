import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const microprofileAPIsList = [
    new CheckboxModel("mpa-config", [
        new VersionedLabel("2.5.2", "MicroProfile Config 1.2", "com.kumuluz.ee.config:kumuluzee-config-mp:${kumuluzee-config-mp.version}")
    ], []),
    new CheckboxModel("mpa-healthcheck", [
        new VersionedLabel("2.4.0", "MicroProfile Health Check 1.0", "n/a")
    ], []),
    new CheckboxModel("mpa-faulttolerance", [
        new VersionedLabel("2.4.0", "MicroProfile Fault Tolerance 1.0", "n/a"),
        new VersionedLabel("3.0.0", "MicroProfile Fault Tolerance 1.1", "n/a")
    ], []),
    new CheckboxModel("mpa-metrics", [
        new VersionedLabel("2.4.0", "MicroProfile Metrics 1.1", "n/a")
    ], []),
    new CheckboxModel("mpa-jwt-auth", [
        new VersionedLabel("2.2.0", "MicroProfile JWT Authentication 1.0", "com.kumuluz.ee.jwt:kumuluzee-jwt-auth:${kumuluzee.jwt-auth.version}"),
        new VersionedLabel("3.1.0", "MicroProfile JWT Authentication 1.1", "com.kumuluz.ee.jwt:kumuluzee-jwt-auth:${kumuluzee.jwt-auth.version}")
    ], []),
    new CheckboxModel("mpa-rest-client", [
        new VersionedLabel("2.5.3", "MicroProfile Rest Client 1.1.0", "com.kumuluz.ee.rest-client:kumuluzee-rest-client:${kumuluzee.rest-client.version}")
    ], []),
    new CheckboxModel("mpa-openapi", [
        new VersionedLabel("2.5.3", "MicroProfile OpenApi 1.0.1", "com.kumuluz.ee.openapi:kumuluzee-openapi:${kumuluzee.openapi.version}")
    ], []),
    new CheckboxModel("mpa-opentracing", [
        new VersionedLabel("2.5.3", "MicroProfile OpenTracing 1.2.1", "com.kumuluz.ee.opentracing:kumuluzee-opentracing-core:${kumuluzee.opentracing.version}")
    ], [])
];
