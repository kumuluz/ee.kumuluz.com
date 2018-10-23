import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";

import "./footer.component.scss";
import {GITHUB_URL, KUMULUZ_COM, SUNESIS_SI, TWITTER_URL} from "../../content/constants.content";

export class FooterComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-footer-component">
                <div className="social-media">
                    <a href={TWITTER_URL} target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>                </div>
                <div className="copyright">
                    Member of KumuluzDigital, the Kumuluz family of products. Copyright &copy; 2013 - 2018. All rights reserved.
                </div>
                <div className="sponsor">
                    <a href={KUMULUZ_COM} target="_blank" rel="noreferrer noopener">Kumuluz</a>
                    &#160;and KumuluzEE are registered trademarks.<br/>
                    Main sponsor of this project is&#160;
                    <a href={SUNESIS_SI} target="_blank" rel="noreferrer noopener">Sunesis.</a>
                </div>
            </div>
        );
    }
}
