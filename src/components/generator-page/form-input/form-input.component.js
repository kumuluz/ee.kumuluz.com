import React, {Component} from "react";
import PropType from "prop-types";

import "./form-input.component.scss";

export class FormInputComponent extends Component {

    static propTypes = {
        id: PropType.string,
        label: PropType.string,
        placeholder: PropType.string,
        type: PropType.string,
        rows: PropType.number,
        optionList: PropType.array,
        whenChange: PropType.func
    };

    constructor(props) {
        super(props);
        this.changeSelectValue = this.changeSelectValue.bind(this);

        this.state = {
            selectVal: null
        };
    }

    componentDidMount() {
        const {type, optionList} = this.props;
        if (type === "select") {
            this.setState({
                selectVal: optionList.find(opt => opt.recommended).label
            });
        }
    }

    changeSelectValue(newVal) {
        this.setState({
            selectVal: newVal
        });
    }

    renderFormControl(id, type, placeholder, rows, optionList, whenChange) {
        if (type === "input" || !type) {
            return (
                <input className="form-control" type="text" placeholder={placeholder} id={id}/>
            );
        } else if (type === "textarea") {
            return (
                <textarea className="form-control" placeholder={placeholder} id={id} rows={rows ? rows : 3}/>
            );
        } else if (type === "select") {
            return (
                <select className="form-control" id={id} value={this.state.selectVal ? this.state.selectVal : ""} onChange={(e) => {
                    this.changeSelectValue(e.target.value);
                    if(whenChange) {
                        whenChange(e);
                    }
                }}>
                    {optionList.map((opt, index) => (
                        <option key={index} value={opt.label}>{opt.label}</option>
                    ))}
                </select>
            );
        }
        else {
            throw new TypeError("Wrong form control type!");
        }
    }

    render() {
        const {id, type, label, placeholder, rows, optionList, whenChange} = this.props;

        return (
            <div className="ee-form-input-component">
                <label>
                    {label}
                </label>
                {this.renderFormControl(id, type, placeholder, rows, optionList, whenChange)}
            </div>
        );
    }
}
