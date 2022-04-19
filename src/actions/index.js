import axios from "axios"

export const getUsers = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => dispatch({ type: "GET_USERS", payload: response.data }))
    .catch(error => dispatch({ type: "USERS_ERROR", payload: error }));
}