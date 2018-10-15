import React, {Component} from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";

import "../../../assets/scss/code.theme.scss";

export class CodePageComponent extends Component {

    static propTypes = {
        children: PropTypes.string,
        id: PropTypes.string,
        lang: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const {id, lang, children} = this.props;

        const language = `language-${lang}`;

        return (
            <pre id={id} className="code-page-item line-numbers">
                <code className={language}>
                    {children}
                </code>
            </pre>
        );
    }
}
