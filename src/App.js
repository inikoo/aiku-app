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

          <Switch>

            <Route path='/login' render={props => (
                <Login {...props} login={login} loggedIn={loggedIn} />
            )} />
            <Route path='/' exact render={props => (
                <Aiku {...props} loggedIn={loggedIn} />
            )} />

          </Switch>


      </Router>
  );
};

export default App;