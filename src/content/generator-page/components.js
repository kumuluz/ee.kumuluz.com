import {CheckboxModel, VersionedLabel} from "./schema/checkbox-model.class";

export const componentsList = [
    /*
        To add new component:
        first param: string id of checkbox (unique)
        second param: set which version of KumuluzEE enables which version of component
        third param: array of ids it depends on (empty if it is standalone)
     */
    new CheckboxModel("comp-servlet", [
        new VersionedLabel("2.2.0", "*", "Servlet 3.1 (Jetty)", "com.kumuluz.ee:kumuluzee-servlet-jetty")
    ], []),
    new CheckboxModel("comp-cdi", [
        new VersionedLabel("2.2.0", "*", "CDI 1.2 (RI Weld)", "com.kumuluz.ee:kumuluzee-cdi-weld"),
        new VersionedLabel("3.0.0", "*", "CDI 2.0 (RI Weld)", "com.kumuluz.ee:kumuluzee-cdi-weld"),
    ], []),
    new CheckboxModel("comp-jaxrs", [
        new VersionedLabel("2.2.0", "*", "JAX-RS 2.0 (RI Jersey)", "com.kumuluz.ee:kumuluzee-jax-rs-jersey"),
        new VersionedLabel("3.0.0", "*", "JAX-RS 2.1 (RI Jersey)", "com.kumuluz.ee:kumuluzee-jax-rs-jersey"),
    ], ["comp-servlet"]),
    new CheckboxModel("comp-jsonp", [
        new VersionedLabel("2.2.0", "*", "JSON-P 1.0 (RI JSONP)", "com.kumuluz.ee:kumuluzee-json-p-jsonp"),
        new VersionedLabel("3.0.0", "*", "JSON-P 1.1 (RI JSONP)", "com.kumuluz.ee:kumuluzee-json-p-jsonp")
    ], []),
    new CheckboxModel("comp-jsonb", [
        new VersionedLabel("3.0.0", "*", "JSON-B 1.0 (RI Yasson)", "com.kumuluz.ee:kumuluzee-json-b-yasson")
    ], ["comp-jsonp"]),
    new CheckboxModel("comp-jsp", [
        new VersionedLabel("2.2.0", "*", "JSP 2.3 (Jetty Apache Jasper)", "com.kumuluz.ee:kumuluzee-jsp-jetty")
    ], ["comp-servlet", "comp-el"]),
    new CheckboxModel("comp-jpa-eclipselink", [
        new VersionedLabel("2.2.0", "*", "JPA 2.1 (RI EclipseLink)", "com.kumuluz.ee:kumuluzee-jpa-eclipselink"),
        new VersionedLabel("3.0.0", "*", "JPA 2.2 (RI EclipseLink)", "com.kumuluz.ee:kumuluzee-jpa-eclipselink")
    ], []),
    new CheckboxModel("comp-jpa-hibernate", [
        new VersionedLabel("2.2.0", "*", "JPA 2.1 (RI Hibernate)", "com.kumuluz.ee:kumuluzee-jpa-hibernate"),
        new VersionedLabel("3.0.0", "*", "JPA 2.2 (RI Hibernate)", "com.kumuluz.ee:kumuluzee-jpa-hibernate")
    ], []),
    new CheckboxModel("comp-el", [
        new VersionedLabel("2.2.0", "*", "EL 3.0 (RI UEL)", "com.kumuluz.ee:kumuluzee-el-uel")
    ], []),
    new CheckboxModel("comp-jaxws-metro", [
        new VersionedLabel("2.2.0", "*", "JAX-WS 2.2 (RI Metro)", "com.kumuluz.ee:kumuluzee-jax-ws-metro"),
        new VersionedLabel("3.0.0", "*", "JAX-WS 2.3 (RI Metro)", "com.kumuluz.ee:kumuluzee-jax-ws-metro")
    ], []),
    new CheckboxModel("comp-jaxws-apachecfx", [
        new VersionedLabel("2.6.0", "*", "JAX-WS 2.3 (Apache CXF)", "com.kumuluz.ee:kumuluzee-jax-ws-cxf")
    ], ["comp-servlet"]),
    new CheckboxModel("comp-jsf", [
        new VersionedLabel("2.2.0", "*", "JSF 2.2 (RI Mojarra)", "com.kumuluz.ee:kumuluzee-jsf-mojarra"),
        new VersionedLabel("3.0.0", "*", "JSF 2.3 (RI Mojarra)", "com.kumuluz.ee:kumuluzee-jsf-mojarra")
    ], ["comp-servlet", "comp-el", "comp-jsp"]),
    new CheckboxModel("comp-websocket", [
        new VersionedLabel("2.2.0", "*", "WebSocket 1.1 (Jetty)", "com.kumuluz.ee:kumuluzee-websocket-jetty")
    ], ["comp-servlet"]),
    new CheckboxModel("comp-bean-validation", [
        new VersionedLabel("2.2.0", "*", "Bean Validation 1.1 (RI Hibernate validator)", "com.kumuluz.ee:kumuluzee-bean-validation-hibernate-validator"),
        new VersionedLabel("3.0.0", "*", "Bean Validation 2.0 (RI Hibernate validator)", "com.kumuluz.ee:kumuluzee-bean-validation-hibernate-validator")
    ], ["comp-el"]),
    new CheckboxModel("comp-jta", [
        new VersionedLabel("2.3.0", "*", "JTA 1.2 (Narayana)", "com.kumuluz.ee:kumuluzee-jta-narayana"),
        new VersionedLabel("3.0.0", "*", "JTA 1.3 (Narayana)", "com.kumuluz.ee:kumuluzee-jta-narayana")
    ], []),
    new CheckboxModel("comp-javamail", [
        new VersionedLabel("3.0.0", "*", "JavaMail 1.6 (RI)", "com.kumuluz.ee:kumuluzee-javamail-ri")
    ], [])
];
