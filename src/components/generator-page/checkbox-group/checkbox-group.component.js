import React, {Component} from "react";
import PropType from "prop-types";

import "./checkbox-group.component.scss";

export class CheckboxGroupComponent extends Component {

    static propTypes = {
        items: PropType.array,
        groupName: PropType.string,
        onSelected: PropType.func,
        columns: PropType.number,
        version: PropType.string,
        disabled: PropType.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);
        //this._getValue = this._getValue.bind(this);
    }

    componentDidMount() {
        const {items} = this.props;

        items.forEach(item => {
            const elem = document.getElementById(item.id);
            elem.labelElement = Array.from(elem.parentNode.childNodes).find(el => el.tagName === "SPAN");
            elem.dataObject = item;
            elem.changeValue = (value, label) => {
                elem.labelElement.textContent = label;
                elem.value = value;
            };
        });
    }

    /*_getValue(version, labels) {
        for(let valueToCheck of labels) {
            if (valueToCheck.value === "none") {
                return {
                    label: valueToCheck.label
                };
            }

            if (GeneratorHelper.versionIsLargerOrEqual(version, valueToCheck.version)) {
                return {
                    label: valueToCheck.label,
                    value: valueToCheck.value
                }
            }
        }
    }*/

    render() {
        const {items, groupName, onSelected, columns, version, disabled} = this.props;
        const clazz = columns ? "column-" + columns : "";
        const componentClazz = columns ? "ee-checkbox-group-component has-columns" : "ee-checkbox-group-component";

        return (
            <div className={componentClazz}>
                {items.map((item, index) =>{
                    const val = item.getValue(version);

                    return (
                        <div key={index} className={clazz + (disabled || val.disabled ? " disabled-checkbox": "")}>
                            <input type="checkbox" id={item.id} value={val ? val.value : null} disabled={disabled || val.disabled}
                                name={groupName} onClick={onSelected ? onSelected : null}/>
                            <label htmlFor={item.id}>

                            </label>
                            <span>
                                {val ? val.label : null}
                            </span>
                        </div>
                    );
                } )}
            </div>
        );
    }
}
