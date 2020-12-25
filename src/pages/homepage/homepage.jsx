import React from 'react'

import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

import "./homepage.scss"

const HomePage = (props) => {
    console.log({propsHomepage: props});
    return (
        <div className="homepage text-center">
            <div className="content">
                <h1 className="title">ismartcsv</h1>
                <div className="caption">smart way to work with scientific friendly csv data in python</div>
                <p className="description">
                    Fugiat cupidatat ad est cupidatat laborum nostrud incididunt. Ut culpa sint mollit dolore cillum mollit incididunt. Incididunt consequat consectetur est aliquip ea magna esse commodo elit. Esse et incididunt in dolor cillum sint nisi irure eiusmod est sit consectetur.
                </p>
            </div>
            <div className="buttons">
                <Link to="/new-file" className="link-anchor">
                    <Button variant="primary d-block" size='lg'>create a new file</Button>
                </Link>
                <Link to="/open-file" className="link-anchor">
                    <Button variant="warning d-block" size="lg">edit an existing file</Button>
                </Link>
            </div>
            
            {/* <Button variant="primary" onClick={()=>props.history.push("#/new-file")}>Create New file</Button> */}
            
            {/* <Button variant="warning">
                <Link to="/new-file">click here for something</Link>
            </Button> */}
        </div>
    )
}

export default HomePage
