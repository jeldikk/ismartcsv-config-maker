import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import PARSERS_INFO from "./parsers-info.data"

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
                    {
                        Object.keys(PARSERS_INFO).map((keyname) => {
                            return (
                                <code key={keyname} className="d-block">
                                    {`${keyname} : ${PARSERS_INFO[keyname]}`}
                                </code>
                            )
                        })
                    }
                </Card.Body>
            </Card>
        )
    }
}

export default ParsersInfo
