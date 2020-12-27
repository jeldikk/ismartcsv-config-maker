import React, { Component } from 'react'
import {connect} from "react-redux"

import {Button} from 'react-bootstrap'
import "./field-card.styles.scss"

// import {electron} from "../../App"
const electron = window.require('electron')

const {Menu} = electron.remote;
// import FIELD_DATA from "./field-card.data"

import {removeField} from "../../redux/fields-info/fields-info.actions"

export class FieldCard extends Component {

    contextMenuHandler = (event) => {

        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'edit',
                click: () => {
                    console.log("this should open an modal window")
                }
            },
            {
                label: 'delete',
                click: () => {
                    this.props.removeField(this.props.field)
                }
            }
        ])

        contextMenu.popup();
    }
    render() {
        // console.log(electron.remote)
        const {field} = this.props;
        return (
            <div className="field-card" onContextMenu={this.contextMenuHandler}>
                <code>
                    {`name : ${field.name}, colno: ${field.colno}, label: ${field.label}(${field.units}) `}
                </code>
                {/* <div className="buttons">
                    <Button variant="primary mx-2" size="sm">Edit</Button>
                    <Button variant="danger mx-2" size="sm" onContextMenu={() => console.log("context menu clicked")} onClick={() => this.props.removeField(field)}>Delete</Button>
                </div> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeField : (field) => dispatch(removeField(field))
    }
}

export default connect(null, mapDispatchToProps)(FieldCard);
