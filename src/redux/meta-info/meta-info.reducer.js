import META_INFO from "./meta-info.data"
const INITIAL_STATE = META_INFO;


const metaInfoReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        default:
            return state
    }
}

export default metaInfoReducer