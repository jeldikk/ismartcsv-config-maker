import React from "react";
import { Card, Button } from "react-bootstrap";

import ENCODERS_INFO from "./encoders-info.data";

function EncodersInfo() {
  return (
    <Card className="info encoders-info">
      <Card.Header>
        <span className="title">Encoders Info</span>
        <span className="buttons">
          <Button variant="primary" size="sm">
            Edit Info
          </Button>
        </span>
      </Card.Header>
      <Card.Body>
        {Object.keys(ENCODERS_INFO).map((keyname) => {
          return;
          <code key={keyname} className="d-block">
            {`${keyname} : ${ENCODERS_INFO[keyname]}`}
          </code>;
        })}
      </Card.Body>
    </Card>
  );
}

export default EncodersInfo;
