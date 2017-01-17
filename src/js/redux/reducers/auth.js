export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'SIGNUP':
            return {
                ...state,
                errors: action.error ? action.payload.errors : null
            };
        case 'UPDATE_FIELD_AUTH':
            return {...state, [action.key]: action.value }
    }

    return state;
};
