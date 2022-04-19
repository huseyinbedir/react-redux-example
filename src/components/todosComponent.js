import { connect } from "react-redux";
import { getTodos } from "../actions/todos";
import { useEffect } from 'react';

const TodosComponent = (props) =>  {

    useEffect(() => {
      props.getTodos();
    },[]);
  
    return (
      <div className="App">
        <h1>Todos Listesi</h1>
        <a href=''>Todos List</a>
        <ul>
        {
          props.todos.map(user => {
            return (
              <li key={user.id}>{user.title}</li>
            );
          })
        }
        </ul>
      </div>
    );
  }
  function mapStateToProps(state){
    return  {
      todos: state.todosReducer.todos
    }
  }
  export default connect(mapStateToProps,{getTodos})(TodosComponent);