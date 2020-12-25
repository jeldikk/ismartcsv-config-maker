import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class ParsersInfo extends Component {
    render() {
        return (
            <Card className="info parsers-info">
                <Card.Header>
                    <span className="title">Parsers Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Edit Info</Button>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text>this is parsers info</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ParsersInfo
