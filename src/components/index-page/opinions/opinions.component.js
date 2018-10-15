import React, {Component} from "react";
import anime from "animejs";

import "./opinions.component.scss";
import {opinionsList} from "../../../content/export.content";
import leftArrow from "../../../assets/images/grey-arrow-left.svg";
import rightArrow from "../../../assets/images/grey-arrow-right.svg";

export class OpinionsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opinionArray: [],
        };
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    componentDidMount() {
        const opinions = opinionsList.slice();
        this.setState({
            opinionArray: opinions
        });
    }

    shiftArrayInDirection(direction) {
        const array = this.state.opinionArray.slice();
        if (direction === 1) {
            const lastElement = array.pop();
            array.unshift(lastElement);
        } else {
            const firstElement = array.shift();
            array.push(firstElement);
        }
        this.setState({
            opinionArray: array
        });
    }

    moveLeft() {
        this.shiftArrayInDirection(1);
    }

    moveRight() {
        this.shiftArrayInDirection(-1);
    }

    renderTile(blockIndex, position) {

        const block = this.returnOpinionByIndex(blockIndex);
        if (!block) {
            return (
                <div />
            )
        }

        let clazz = "block-item";
        if (position === "left") {
            clazz += " side-block left-side-block";
        } else if (position === "right") {
            clazz += " side-block right-side-block";
        } else {
            clazz += " center-block";
        }

        return (
            <div className={clazz}>
                <div className="block-content-wrapper">
                    <div className="image">
                        <img src={block.image}/>
                    </div>
                    <div className="content">
                        {block.content}
                    </div>
                    <div>
                        <p className="name">
                            {block.name}
                        </p>
                        <p className="role">
                            {block.role}
                        </p>
                    </div>
                </div>
                <div className="block-shadow" />
            </div>
        );
    }

    returnOpinionByIndex(i) {
        if (this.state.opinionArray && this.state.opinionArray.length > 0) {
            return this.state.opinionArray[i];
        }
        return null;
    }

    render() {

        return (
            <div className="ee-opinions-component">
                <div className="blocks" id="blocks">
                    {this.renderTile(0, "left")}
                    <div className="block-left-btn block-btn">
                        <span onClick={() => this.moveLeft()}>
                            <img src={leftArrow}/>
                        </span>
                    </div>
                    {this.renderTile(1, "center")}
                    <div className="block-right-btn block-btn">
                        <span onClick={() => this.moveRight()}>
                            <img src={rightArrow} />
                        </span>
                    </div>
                    {this.renderTile(2, "right")}
                </div>
            </div>
        );
    }

}
