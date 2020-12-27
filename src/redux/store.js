import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import rootReducer from "./root_reducer"

let middleWare = [logger];

export const store = createStore(rootReducer,applyMiddleware(...middleWare))

// export default store;