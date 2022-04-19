const INITIAL_DATA = {
    todos : [],
    message:''
}

export const todosReducer = (state = INITIAL_DATA, action) => {

    switch (action.type) {
        case "GET_TODOS":
            return {...state , todos:action.payload}
        case "TODOS_ERROR":
            return {...state ,message:action.payload}
        default:
            return state;
    }

}