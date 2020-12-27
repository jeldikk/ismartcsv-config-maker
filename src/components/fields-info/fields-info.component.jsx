import React, { Component } from 'react'

import {Card, Button} from "react-bootstrap"
import {connect} from "react-redux"

import FieldCard from "../field-card/field-card.component"

import "./fields-info.styles.scss"

export class FieldsInfo extends Component {
    render() {
        const {fieldsList} = this.props;
        return (
            <Card className="info fields-info">
                <Card.Header>
                    <span className="title">Fields Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Add Field</Button>
                    </span>
                </Card.Header>
                <Card.Body>

                    {
                        fieldsList.map((field) => <FieldCard key={field.name} field={field} />)
                    }
                    {/* <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    <FieldCard /> */}
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fieldsList : state.fieldsInfo.fields,
    }
}

export default connect(mapStateToProps, null)(FieldsInfo);
