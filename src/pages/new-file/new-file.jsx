import React from 'react'

import MetaInfo from "../../components/meta-info/meta-info.component"
import FieldsInfo from "../../components/fields-info/fields-info.component"
import InterpolationInfo from "../../components/interpolation-info/interpolation-info.component"
import OutputInfo from "../../components/output-info/output-info.component"
import PlotsInfo from "../../components/plots-info/plots-info.components"
import ParsersInfo from "../../components/parsers-info/parsers-info.component"
import EncodersInfo from '../../components/encoders-info/encoders-info.components'
import StatusBar from "../../components/statusbar/statusbar.component"
import "./new-file.styles.scss"

const NewFilePage = () => {
    return (
        <div className="new-file">
            <MetaInfo />
            <FieldsInfo />
            <InterpolationInfo />
            <OutputInfo />
            <PlotsInfo />
            <ParsersInfo />
            <EncodersInfo />
            <StatusBar />
        </div>
    )
}

export default NewFilePage
