import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Aiku from './components/Aiku';
import Login from './components/Login';
import apiClient from './services/api';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(
      sessionStorage.getItem('loggedIn') === 'true' || false
  );
  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem('loggedIn', true);
  };

  const logout = () => {

      apiClient.post('/api/logout').then(response => {
        if (response.status === 204) {
          setLoggedIn(false);
          sessionStorage.setItem('loggedIn', false);
        }
      })

  };



  console.log(loggedIn)

  return (
      <Router>

        <div className="flex flex-col h-screen justify-between">
          <Switch>

            <Route path='/login' render={props => (
                <Login {...props} login={login} loggedIn={loggedIn} />
            )} />
            <Route path='/' exact render={props => (
                <Aiku {...props} loggedIn={loggedIn} />
            )} />

          </Switch>
          x
          <footer className="flex justify-between  h-6 bg-grey-500">
            <div></div>
            <div><button onClick={logout} className="nav-link btn btn-link">Logout</button>  </div>
            <div></div>
          </footer>
        </div>
      </Router>
  );
};

export default App;