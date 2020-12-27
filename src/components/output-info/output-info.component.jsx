import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'


import OUTPUT_INFO from "./output-info.data"

export class OutputInfo extends Component {
    render() {
        return (
            <Card className="info output-info">
                <Card.Header>
                    <span className="title">Output Info</span>
                    <span className="buttons">
                        <Button variant="primary" size="sm">Edit Info</Button>
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center">This is output info</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default OutputInfo
