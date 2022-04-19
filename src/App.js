import './App.css';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

 const App = (props) =>  {

  useEffect(() => {
    props.getUsers();
  },[]);

  return (
    <div className="App">
      <h1>Kullanıcı Listesi</h1>
      <Link to="/todos">Todos List</Link>
      <ul>
      {
        props.users.map(user => {
          return (
            <li key={user.id}>{user.name}</li>
          );
        })
      }
      </ul>
    </div>
  );
}

function mapStateToProps(state){
  return  {
    users: state.userReducer.users
  }
}

export default connect(mapStateToProps,{getUsers})(App);
