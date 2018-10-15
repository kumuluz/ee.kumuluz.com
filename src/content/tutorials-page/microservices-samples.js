import {Sample} from "./schema/sample.class";

export const microservicesSamples = [
    new Sample("Microservices simple", "Simple example of splitting an application into microservices using KumuluzEE.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/microservices-simple", true),
    new Sample("JAX-RS REST service sample", "Develop a REST service using standard JAX-RS 2 API and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jax-rs"),
    new Sample("JAX-WS SOAP web service sample", "Develop a SOAP web service using standard JAX-WS 2 API and pack it as KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jax-ws"),
    new Sample("JPA and CDI sample", "Develop JPA entities and use CDI within a REST service and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jpa"),
    new Sample("Java Server Faces (JSF) sample", "Develop a sample JSF application and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jsf"),
    new Sample("Java Server Pages (JSP) and Servlet sample", "Develop a sample JSP and Servlet and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jsp"),
    new Sample("Servlet sample", "Develop a servlet using standard Servlet 3.0 API and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/servlet"),
    new Sample("Websocket sample", "Develop a websocket endpoint using standard WebSocket API and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/websocket"),
    new Sample("Bean validation", "Use bean validation within a REST service and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/bean-validation"),
    new Sample("JAX-RS service over HTTPS", "Develop a REST service using standard JAX-RS 2 API, expose it over HTTPS and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/https"),
    new Sample("JUL sample", "Build a REST service which utilizes the default logging implementation by java.util.logging to log basic information and pack it as a KumuluzEE microservice.", "https://github.com/kumuluz/kumuluzee-samples/tree/master/jul")
];
