import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const microprofilesList = [
    new CheckboxModel("mp-1.0", [
        new VersionedLabel("2.2.0", "MicroProfile 1.0", "com.kumuluz.ee:kumuluzee-microProfile-1.0")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs"]),
    new CheckboxModel("mp-1.1", [
        new VersionedLabel("2.5.2", "MicroProfile 1.1", "com.kumuluz.ee:kumuluzee-microProfile-1.1")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "mpa-config"]),
    new CheckboxModel("mp-1.2", [
        new VersionedLabel("2.5.2", "MicroProfile 1.2", "com.kumuluz.ee:kumuluzee-microProfile-1.2")
    ], ["comp-cdi", "comp-jsonp", "comp-jaxrs", "mpa-config", "mpa-faulttolerance", "ext-other-faulttolerance",
        "mpa-jwt-auth", "mpa-metrics", "ext-metrics", "mpa-healthcheck", "ext-other-health"]),
];
