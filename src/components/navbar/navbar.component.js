import React, {Component} from "react";
import Link from "gatsby-link";

import {githubItem, navbarItems} from "../../content/export.content";

import "./navbar.component.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

import kumuluzeeLogo from "../../assets/images/kumuluzee-logo.svg";
import {determineScreenSize, MOBILE_MENU_VISIBLE_BELOW} from "../../layouts/common";

export class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.closeMenuOnNavigation = this.closeMenuOnNavigation.bind(this);
        this.state = {
            openMobileMenu: false
        };
    }

    toggleMobileMenu() {
        if (this.linkMenu.clientHeight === 0) {
            this.linkMenu.style.height = `${this.linkMenu.scrollHeight}px`;
        } else {
            this.linkMenu.style.height = `0px`;
        }
    }

    closeMenuOnNavigation() {
        if (this._mobileMenuIsVisible()) {
            this.linkMenu.style.height = "0px";
        }
    }

    _mobileMenuIsVisible() {
        const screenWidth = determineScreenSize();
        return screenWidth < MOBILE_MENU_VISIBLE_BELOW;
    }

    renderLinkItem(item) {
        if(item.external) {
            return (
                <a href={item.url} target="_blank">{item.title}</a>
            )
        } else {
            return (
                <Link to={item.url} onClick={this.closeMenuOnNavigation}>{item.title}</Link>
            )
        }
    }

    render() {

        return (
            <div className="ee-navbar-component">
                <nav>
                    <div className="brand-container">
                        <div className="brand">
                            <Link to="/" onClick={this.closeMenuOnNavigation}>
                                <img src={kumuluzeeLogo}/>
                            </Link>
                        </div>
                        <div className="burger-menu" onClick={this.toggleMobileMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    <div className="link-container" ref={ref => this.linkMenu = ref}>
                        <div className="links">
                            {navbarItems.map((item, index) => (
                                <div key={index} className="link-item">
                                    {this.renderLinkItem(item)}
                                </div>
                            ))}
                        </div>
                        <div className="github-link">
                            <a href={githubItem.url} target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                                <span className="text">{githubItem.title}</span>
                            </a>
                        </div>
                        <div className="divider-container">
                            <hr noshade="noshade" className="menu-divider"/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
