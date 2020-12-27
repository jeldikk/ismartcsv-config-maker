import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import INTERPOLATION_INFO from "./interpolation-info.data"

export class InterpolationInfo extends Component {
    render() {
        return (
            <Card className="info interpolation-info">
                <Card.Header>
                    <span className="title">Interpolation Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Edit info</Button>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center">Interpolation info goes here</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default InterpolationInfo
