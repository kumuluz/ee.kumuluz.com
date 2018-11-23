/* eslint-disable indent */
/* eslint-disable no-useless-escape */
import React, {Component} from "react";
import Link from "gatsby-link";

import "./example-code.component.scss";
import codeExampleImage from "../../../assets/images/code-example.svg";
import {CodeFormatComponent, CodePageComponent} from "../../shared/export.shared.components";

export class ExampleCodeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const pages = [
            {
                filename: "OrderResource.java",
                id: "order-resource"
            },
            {
                filename: "pom.xml",
                id: "pom-xml"
            },
            {
                filename: "pom.xml (MicroProfile)",
                id: "pom-xml-mp"
            }
        ];

        return (
            <div className="ee-example-code-component">
                <div className="example-logo">
                    <img src={codeExampleImage}/>
                </div>
                <div className="example-content">
                    <h1>EXAMPLE CODE</h1>
                    <h2>
                        We&apos;re also bringing better support for Java 9 and above, with continuously increased
                        streamlined modules support throughout the betas.
                    </h2>
                    <div className="example-code">
                        <CodeFormatComponent pages={pages}>
                            <CodePageComponent id="order-resource" lang={"java"}>
                                {`@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RequestScoped
public class OrdersResource {

    @PersistenceContext(unitName = "books")
    private EntityManager em;

    @GET
    @Path("/{id}")
    public Response getOrder(@PathParam("id") Integer id) {

        BookOrder o = em.find(BookOrder.class, id);

        if (o == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        return Response.ok(o).build();
    }
}`}
                            </CodePageComponent>
                            <CodePageComponent id="pom-xml" lang={"xml"}>
                                {`<properties>
    <kumuluz.version>3.0.0</kumuluz.version>
</properties>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.kumuluz.ee</groupId>
            <artifactId>kumuluzee-bom</artifactId>
            <version>$\{kumuluz.version\}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-core</artifactId>
    </dependency>
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-servlet-jetty</artifactId>
    </dependency>
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-cdi-weld</artifactId>
    </dependency>
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-jax-rs-jersey</artifactId>
    </dependency>
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-jpa-hibernate</artifactId>
    </dependency>
</dependencies>`}
                            </CodePageComponent>
                            <CodePageComponent id="pom-xml-mp" lang={"xml"}>
                                {`<properties>
    <kumuluz.version>3.0.0</kumuluz.version>
</properties>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.kumuluz.ee</groupId>
            <artifactId>kumuluzee-bom</artifactId>
            <version>$\{kumuluz.version\}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <!-- MicroProfile 1.2 -->
    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-microProfile-1.2</artifactId>
    </dependency>

    <dependency>
        <groupId>com.kumuluz.ee</groupId>
        <artifactId>kumuluzee-jpa-hibernate</artifactId>
    </dependency>
</dependencies>`}
                            </CodePageComponent>
                        </CodeFormatComponent>
                    </div>
                    <div className="example-link-tutorial">
                        Read more about in&#160;
                        <Link to="/tutorials">tutorials.</Link>
                    </div>
                </div>

            </div>
        );
    }
}
