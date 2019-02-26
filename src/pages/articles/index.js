import React, {Component} from "react";
import Helmet from "react-helmet";
import {Waypoint} from "react-waypoint";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import {Layout} from "../../layouts/layout";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

import externalLinkImage from "../../assets/images/external-url.svg";
import blueArrowImage from "../../assets/images/arrow.svg";
import "./articles-page.scss";

import {articles} from "../../content/articles-page/articles";

export default class ArticlesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNavElem: null
        };
        this.makeNavbarSticky = this.makeNavbarSticky.bind(this);
        this.setActiveElement = this.setActiveElement.bind(this);
        this.previousScroll = 0;
    }

    isScrollingDown() {
        const scroll = typeof window !== "undefined" ? window.pageYOffset || document.documentElement.scrollTop : 0;
        if (scroll > this.previousScroll) {
            // down
            this.previousScroll = scroll;
            return true;
        } else {
            //up
            this.previousScroll = scroll;
            return false;
        }
    }

    setActiveElement(elementId) {
        const element = document.getElementById(elementId);
        const active = this.state.activeNavElem;
        if (active) {
            active.classList.remove("active");
        }
        element.classList.add("active");
        this.setState({
            activeNavElem: element
        });
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
        this.setActiveElement("navigation-item-0");
        this.previousScroll = typeof window !== "undefined" ? window.pageYOffset || document.documentElement.scrollTop : 0;
    }

    makeNavbarSticky(makeSticky) {
        if (makeSticky) {
            const navbarPanel = document.getElementById("navigation-panel");
            const navbarLocation = navbarPanel.getBoundingClientRect();
            const left = navbarLocation.left;
            const width = navbarLocation.width;

            navbarPanel.classList.add("sticky-navigation");
            navbarPanel.style.left = left + "px";
            navbarPanel.style.width = width + "px";
        } else {
            const navbarPanel = document.getElementById("navigation-panel");
            navbarPanel.classList.remove("sticky-navigation");
            navbarPanel.style.left = "";
            navbarPanel.style.width = "";
        }
    }

    renderNavigation() {
        return Object.keys(articles).map((articleKey, index) => (
            <div className="navigation-item" id={"navigation-item-" + index} key={index} onClick={() => {
                const elemToScrollTo = document.getElementById(articles[articleKey].id);
                if (elemToScrollTo) {
                    elemToScrollTo.scrollIntoView();
                    this.setActiveElement("navigation-item-" + index);
                }
            }}>
                <span>{articles[articleKey].title}</span>
                <img src={blueArrowImage} alt="go-to-arrow"/>
            </div>
        ));
    }

    render() {
        return (
            <Layout>
                <div className="ee-articles-page">
                    <Helmet title="KumuluzEE - Articles" htmlAttributes={{lang: "en"}}/>
                    <div className="header">
                        <div className="title">
                            <h1>Articles</h1>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-section">
                            <div className="navigation" id="tutorial-navigation">
                                <div id="navigation-panel">
                                    {this.renderNavigation()}
                                </div>
                                <Waypoint onLeave={() => this.makeNavbarSticky(true)}/>
                            </div>
                            <div className="articles">
                                <h1>Articles about KumuluzEE</h1>
                                <div className="articles-h1-desc">Users talking about our product</div>
                                <section id="section-0">
                                    <Waypoint onEnter={() => {
                                        this.makeNavbarSticky(false);
                                        this.setActiveElement("navigation-item-0");
                                    }}/>
                                    {articles.section0.articles.map((article, index) => (
                                        <article key={index}>
                                            <a href={article.url} className="article-title" target="_blank"
                                                rel="noreferrer noopener">
                                                <h2>{article.title}</h2>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                            </a>
                                            <p>
                                                {article.desc}
                                            </p>
                                            <a href={article.url} target="_blank" rel="noreferrer noopener">
                                                <img src={externalLinkImage} alt="external-link-image"/>
                                                {article.url}
                                            </a>
                                        </article>
                                    ))}
                                    <Waypoint onLeave={() => {
                                        if (this.isScrollingDown()) {
                                            this.setActiveElement("navigation-item-1");
                                        }
                                    }} onEnter={() => {
                                        if (!this.isScrollingDown()) {
                                            this.setActiveElement("navigation-item-0");
                                        }
                                    }}/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
