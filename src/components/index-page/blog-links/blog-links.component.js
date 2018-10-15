import React, {Component} from "react";
import PropTypes from "prop-types";

import "./blog-links.component.scss";
import linkChevronImage from "../../../assets/images/link-chevron.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

import {blogLinks} from "../../../content/export.content";
import {determineScreenSize, MEDIA_MOBILE} from "../../../layouts/common";

export class BlogLinksComponent extends Component {

    static propTypes = {
        blogTilesOpened: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.checkForMobileResolution = this.checkForMobileResolution.bind(this);
        this.toggleHiddenTiles = this.toggleHiddenTiles.bind(this);
        this.state = {
            isMobile: false,
            chevronIcon: faChevronDown
        };
    }

    componentDidMount() {
        this.checkForMobileResolution();
        window.addEventListener("resize", this.checkForMobileResolution);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkForMobileResolution);
    }

    renderTile(tile, index) {
        return (
            <div className="tile" key={index}>
                <div className="tags">
                    {tile.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="tile-content">
                    <div className="tile-title">{tile.title}</div>
                    <div className="link">
                        <a href={tile.link} target="_blank">
                            <span className="text">View on blog</span>
                            <img src={linkChevronImage}/>
                        </a>
                    </div>
                </div>
                <div className="bottom-border"/>
            </div>
        );
    }

    renderNormalVersion() {
        return blogLinks.map((tile, index) => {
            return this.renderTile(tile, index);
        });
    }

    toggleHiddenTiles() {

        const sumComponentsHeight = (opened) => {
            if (opened) {
                return this.tilesToggler.scrollHeight + this.hiddenTiles.scrollHeight + this.shownTile.scrollHeight;
            }
            return this.tilesToggler.scrollHeight + this.shownTile.scrollHeight;
        };

        const {blogTilesOpened} = this.props;

        if (this.hiddenTiles.clientHeight === 0) {
            this.hiddenTiles.style.height = `${this.hiddenTiles.scrollHeight}px`;
            blogTilesOpened(true, sumComponentsHeight(true) - 40);
            this.setState({
                ...this.state,
                chevronIcon: faChevronUp
            });
        } else {
            this.hiddenTiles.style.height = `0px`;
            blogTilesOpened(false, sumComponentsHeight(false) - 40);
            this.setState({
                ...this.state,
                chevronIcon: faChevronDown
            });
        }
    }

    renderCompactVersion() {
        const shownTile = blogLinks[0];
        const hiddenTiles = blogLinks.slice(1);

        return (
            <div className="compact-tiles">
                <div className="shown-tile" ref={ref => this.shownTile = ref}>
                    {this.renderTile(shownTile, "shown")}
                </div>
                <div className="hidden-tiles" ref={ref => this.hiddenTiles = ref}>
                    {hiddenTiles.map((tile, index) => {
                        return this.renderTile(tile, index);
                    })}
                </div>
                <div className="toggle-hidden-tiles" ref={ref => this.tilesToggler = ref}>
                    {/* TODO: replace chevron with svg image */}
                    <span onClick={this.toggleHiddenTiles}>
                        <FontAwesomeIcon icon={this.state.chevronIcon}/>
                    </span>
                </div>
            </div>
        );
    }

    checkForMobileResolution() {
        const isMobile = determineScreenSize() <= MEDIA_MOBILE;
        this.setState({
            ...this.state,
            isMobile: isMobile
        });
    }

    render() {

        const returnVersion = () => {
            if (this.state.isMobile) {
                return this.renderCompactVersion();
            }
            return this.renderNormalVersion();
        };

        return (
            <div className="ee-blog-links-component">
                {returnVersion()}
            </div>
        )
    }

}
