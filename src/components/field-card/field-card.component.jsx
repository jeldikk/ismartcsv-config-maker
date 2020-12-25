import React, { Component } from 'react'

import "./field-card.styles.scss"

import FIELD_DATA from "./field-card.data"

export class FieldCard extends Component {
    render() {
        return (
            <div className="field-card">
                <code>
                    {`name : ${FIELD_DATA.name}, colno: ${FIELD_DATA.colno}, label: ${FIELD_DATA.label}(${FIELD_DATA.units}) `}
                </code>
            </div>
        )
    }
}

export default FieldCard
