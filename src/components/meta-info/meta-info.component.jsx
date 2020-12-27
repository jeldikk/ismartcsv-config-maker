import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import {connect} from 'react-redux'

// import META_INFO from "./meta-info.data";
import {ChannelTypes} from "../../../app/electron/channels-types"

const electron = window.require('electron');
const {ipcRenderer} = electron

export class MetaInfo extends Component {


  

  openEditDialog = (event) => {
    console.log("openEditDialog event is called")
    ipcRenderer.send(ChannelTypes.OPEN_MODAL_DIALOG,{hash: '/edit-meta-info',title:'Edit Metainfo'})
  }
  render() {

    // console.log({MetaInfoDefaultData: this.props.defaultData})
    const {defaultData} = this.props

    return (
      <Card className="info meta-info">
        <Card.Header>
          <span className="title">Meta Info</span>
          <span className="buttons text-right">
            <Button variant="primary" size="sm" onClick={this.openEditDialog}>Edit Info</Button>
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {
                Object.keys(defaultData).map((keyname, idx) =>{
                    return (
                        <code key={idx} className="d-block">
                            {`${keyname} : ${defaultData[keyname]}`}
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

const mapStateToProps = (state) => {
  return {
    defaultData: state.metaInfo
  }
}

export default connect(mapStateToProps,null)(MetaInfo);
