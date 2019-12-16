const initState = {
    data: [],
    ui: {
        errorMessage: false
    }
};

export const baseReducer = (state = initState, action) => {
    switch(action.type) {
        case 'API_SUCCESS':
            return {...state, data: action.payload, ui: {...state.ui, errorMessage: false}};
        case 'API_ERROR':
            return {...state, ui: {...state.ui, errorMessage: true}}
        default:
            return state;
    }
}