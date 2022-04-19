const INITIAL_DATA = {
    users : [],
    message:''
}

export const userReducer = (state = INITIAL_DATA, action) => {

    switch (action.type) {
        case "GET_USERS":
            return {...state , users:action.payload}
        case "USERS_ERROR":
            return {...state ,message:action.payload}
        default:
            return state;
    }

}