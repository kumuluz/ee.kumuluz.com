import React, {Component} from "react";
import PropTypes from "prop-types";

import "./code-format.component.scss";

export class CodeFormatComponent extends Component {

    static propTypes = {
        pages: PropTypes.array,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    };

    constructor(props) {
        super(props);
        this.openCodePage = this.openCodePage.bind(this);

        this.state = {
            selectedPage: ""
        };
    }

    componentDidMount() {
        const {pages} = this.props;
        // by default open first page
        const firstPage = pages[0].id;
        this.openCodePage(firstPage);
    }

    openCodePage(pageId) {
        const pages = Array.from(this.codeArea.childNodes).filter(el => el.classList.contains("code-page-item"));
        //hide all pages that are not to be opened
        for(let stran of pages) {
            if (stran.id !== pageId) {
                stran.style.display = "none";
            }
        }
        // show selected page
        const page = document.getElementById(pageId);
        page.style.display = "block";

        this.setState({
            selectedPage: pageId
        });
    }

    render() {

        const {pages, children} = this.props;

        const isPageSelected = (pageId) => {
            return this.state.selectedPage === pageId;
        };

        return (
            <div className="ee-code-format-component">
                <div className="pages-list">
                    {pages.map((page, index) => (
                        <span key={index} className={isPageSelected(page.id) ? "active-code-page-item" : ""}
                            onClick={() => this.openCodePage(page.id)}>
                            {page.filename}
                        </span>
                    ))}
                </div>
                <div className="code-area" ref={ref => this.codeArea = ref}>
                    {children}
                </div>
                <div className="bottom-blue-line"/>
            </div>
        );
    }

}
