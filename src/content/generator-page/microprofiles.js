import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const microprofilesList = [
    new CheckboxModel("mp-1.0", [
        new VersionedLabel("2.2.0", "*", "MicroProfile 1.0", "com.kumuluz.ee:kumuluzee-microProfile-1.0")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "comp-servlet"]),
    new CheckboxModel("mp-1.1", [
        new VersionedLabel("2.5.2", "*", "MicroProfile 1.1", "com.kumuluz.ee:kumuluzee-microProfile-1.1")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "comp-servlet", "mpa-config"]),
    new CheckboxModel("mp-1.2", [
        new VersionedLabel("2.5.2", "*", "MicroProfile 1.2", "com.kumuluz.ee:kumuluzee-microProfile-1.2")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "comp-servlet", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health"]),
    new CheckboxModel("mp-1.3", [
        new VersionedLabel("2.6.0", "2.6.0", "MicroProfile 1.3", "com.kumuluz.ee:kumuluzee-microProfile-1.3"),
        new VersionedLabel("3.2.0", "*", "MicroProfile 1.3", "com.kumuluz.ee:kumuluzee-microProfile-1.3")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "comp-servlet", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health",
        "mpa-openapi", "mpa-opentracing", "ext-opentracing-jaeger", "mpa-rest-client"
    ]),
    new CheckboxModel("mp-1.4", [
        new VersionedLabel("2.6.0", "2.6.0", "MicroProfile 1.4", "com.kumuluz.ee:kumuluzee-microProfile-1.4"),
        new VersionedLabel("3.2.0", "*", "MicroProfile 1.4", "com.kumuluz.ee:kumuluzee-microProfile-1.4")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "comp-servlet", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health",
        "mpa-openapi", "mpa-opentracing", "ext-opentracing-jaeger", "mpa-rest-client"
    ]),
    new CheckboxModel("mp-2.0", [
        new VersionedLabel("3.2.0", "*", "MicroProfile 2.0", "com.kumuluz.ee:kumuluzee-microProfile-2.0")
    ], ["comp-cdi", "comp-jsonp", "comp-jsonb", "comp-jaxrs", "comp-servlet", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health",
        "mpa-openapi", "mpa-opentracing", "ext-opentracing-jaeger", "mpa-rest-client"
    ]),
    new CheckboxModel("mp-2.1", [
        new VersionedLabel("3.2.0", "*", "MicroProfile 2.1", "com.kumuluz.ee:kumuluzee-microProfile-2.1")
    ], ["comp-cdi", "comp-jsonp", "comp-jsonb", "comp-jaxrs", "comp-servlet", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health",
        "mpa-openapi", "mpa-opentracing", "ext-opentracing-jaeger", "mpa-rest-client"
    ])
];
