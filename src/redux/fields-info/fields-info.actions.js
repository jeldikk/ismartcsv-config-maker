import FieldsInfoActionTypes from "./fields-info.types"

export const removeField = (field) => {
    return {
        type: FieldsInfoActionTypes.REMOVE_FIELD,
        payload: field
    }
}

export const addField = (field) => {
    return {
        type: FieldsInfoActionTypes.ADD_FIELD,
        payload: field
    }
}

export const updateField = (field) => {
    return {
        type: FieldsInfoActionTypes.UPDATE_FIELD,
        payload: field
    }
}