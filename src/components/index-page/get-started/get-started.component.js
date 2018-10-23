import React, {Component} from "react";
import Link from "gatsby-link";

import "./get-started.component.scss";

export class GetStartedComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-get-started-component">
                <h1>
                    KumuluzEE
                </h1>
                <h2>
                    A lightweight open-source micro service framework.
                </h2>
                <div className="get-started-button">
                    <Link to={"/tutorials"}>
                        Get started with KumuluzEE
                    </Link>
                </div>
            </div>
        );
    }

}
