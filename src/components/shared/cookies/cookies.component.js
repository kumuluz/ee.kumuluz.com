import React, {Component} from "react";

import "./cookies.component.scss";

export class CookiesComponent extends Component {

    constructor(props) {
        super(props);
        this.STORAGE_NAME = "COOKIES_AGREED";
        this.acceptCookies = this.acceptCookies.bind(this);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        this.setState({
            show: !this.cookiesAreAccepted()
        });
    }

    cookiesAreAccepted() {
        const stored = JSON.parse(localStorage.getItem(this.STORAGE_NAME));
        return stored !== null ? stored : false;
    }

    acceptCookies() {
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(true));
        this.setState({
            show: false
        });
    }

    render() {
        const clazz = this.state.show ? "ee-cookies-component" : "accepted-cookies ee-cookies-component";
        return (
            <div className={clazz}>
                <div className="content">
                    <div>This website uses cookies to improve user experience. By using our website you consent to all cookies.</div>
                    <button className="button" onClick={this.acceptCookies}>I agree</button>
                </div>
            </div>
        );
    }
}
