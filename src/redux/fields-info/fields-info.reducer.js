import FieldsInfoActionTypes from "./fields-info.types"
import FIELD_DATA from "./fields-info.data"

const INITIAL_DATA = {
    fields: FIELD_DATA
}

const fieldsInfoReducer = (state=INITIAL_DATA, action) => {
    switch(action.type){
        case FieldsInfoActionTypes.ADD_FIELD:
            return {
                ...state,
                fields: [...state.fields,action.payload]
            }
        case FieldsInfoActionTypes.REMOVE_FIELD:
            return {
                ...state,
                fields: state.fields.filter((field) => (field.name !== action.payload.name))
            }
        case FieldsInfoActionTypes.UPDATE_FIELD:
            return {
                ...state,
                fields: state.fields.map((field) => (field.name === action.payload.name ? action.payload : fld))
            }
        default:
            return state
    }
}

export default fieldsInfoReducer;