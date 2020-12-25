import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class PlotsInfo extends Component {
    render() {
        return (
            <Card className="info plots-info">
                <Card.Header>
                    <span className="title">Plots Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Add Info</Button>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text>This is plots info</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default PlotsInfo
