import React, {Component} from "react";

import "./collaborations.component.scss";
import {collaborations} from "../../../content/export.content";

export class CollaborationsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ee-collaborations-component">
                {collaborations.map((collab, index) => (
                    <div className="collaboration-item" key={index}>
                        <div className="collaboration-logo">
                            <img src={collab.image} className={collab.clazz}/>
                        </div>
                        <div className="collaboration-content">
                            <h1>{collab.title}</h1>
                            <p dangerouslySetInnerHTML={{__html: collab.description}} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

}
