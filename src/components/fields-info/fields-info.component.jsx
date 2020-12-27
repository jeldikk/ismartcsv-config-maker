import React, { Component } from 'react'

import {Card, Button} from "react-bootstrap"

import FieldCard from "../field-card/field-card.component"

import "./fields-info.styles.scss"

export class FieldsInfo extends Component {
    render() {
        return (
            <Card className="info fields-info">
                <Card.Header>
                    <span className="title">Fields Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Add Field</Button>
                    </span>
                </Card.Header>
                <Card.Body>
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    
                </Card.Body>
            </Card>
        )
    }
}

export default FieldsInfo
