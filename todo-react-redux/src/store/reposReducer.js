const SET_ITEMS = "SET_ITEMS";

const defaultState = {
    items: []
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}

export const setItems = (items) => ({type:SET_ITEMS, payload:items})