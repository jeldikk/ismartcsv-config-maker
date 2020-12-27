import {combineReducers} from 'redux'

import metaInfoReducer from "./meta-info/meta-info.reducer"
import fieldsInfoReducer from "./fields-info/fields-info.reducer"


const rootReducer = combineReducers({
    metaInfo: metaInfoReducer,
    fieldsInfo: fieldsInfoReducer,
})

export default rootReducer;