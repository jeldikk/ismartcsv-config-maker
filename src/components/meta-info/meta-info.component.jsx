import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import META_INFO from "./meta-info.data";

export class MetaInfo extends Component {
  render() {
    return (
      <Card className="info meta-info">
        <Card.Header>
          <span className="title">Meta Info</span>
          <span className="buttons text-right">
            <Button variant="primary" size="sm">Edit Info</Button>
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {
                Object.keys(META_INFO).map((keyname, idx) =>{
                    return (
                        <code key={idx} className="d-block">
                            {`${keyname} : ${META_INFO[keyname]}`}
                        </code>
                    )
                })
            }
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MetaInfo;
