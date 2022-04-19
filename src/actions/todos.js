import axios from "axios"

export const getTodos = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => dispatch({ type: "GET_TODOS", payload: response.data }))
    .catch(error => dispatch({ type: "TODOS_ERROR", payload: error }));
}