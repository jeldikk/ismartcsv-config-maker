import React, { Component } from 'react'

import {connect} from "react-redux"

export class EditMetaInfo extends Component {

    componentDidMount(){
        document.title = "Edit MetaInfo"
    }


    render() {
        console.log(this.props)
        return (
            <div className="edit-meta-info">
                This page will have form with for editing meta info
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        metaInfo : state.metaInfo
    }
}

export default connect(mapStateToProps, null)(EditMetaInfo)
