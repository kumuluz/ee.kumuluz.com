import React, {Component} from "react";
import {referenceList} from "../../../content/index-page/references.content";

import "./they-trust-us.component.scss";
import {MAIL_TO_ADDRESS} from "../../../content/constants.content";

export class TheyTrustUsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-they-trust-us-component">
                <div>
                    <h1>THEY TRUST US</h1>
                </div>
                <div className="references">
                    {referenceList.map((reference, index) => {
                        return (
                            <div className="reference-item" key={index}>
                                <img src={reference.image} />
                                <span>
                                    <p>
                                        {reference.name}
                                    </p>
                                </span>
                            </div>
                        )})
                    }
                </div>
                <div className="contact">
                    Want to be listed here? Please&#160;
                    <a href={MAIL_TO_ADDRESS} target="_blank">
                        contact us!
                    </a>
                </div>
            </div>
        );
    }
}
