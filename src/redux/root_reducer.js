import {combineReducers} from 'redux'

import metaInfoReducer from "./meta-info/meta-info.reducer"


const rootReducer = combineReducers({
    metaInfo: metaInfoReducer
})

export default rootReducer;