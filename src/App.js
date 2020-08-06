import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import MobileSideNav from "./components/navigation/MobileSideNav";
import SideNav from "./components/navigation/SideNav";
import TopHeader from "./components/navigation/TopHeader";

import Dashboard from "./components/Dashboard";


const App = () => {
    const [loggedIn, setLoggedIn] = React.useState(sessionStorage.getItem('loggedIn') === 'yes' || 'no');
    const login = () => {
        setLoggedIn(true);
        sessionStorage.setItem('loggedIn', 'yes');
    };

    /*
    const logout = () => {

        apiClient.post('/api/logout').then(response => {
          if (response.status === 204) {
            setLoggedIn(false);
            sessionStorage.setItem('loggedIn', 'no');
          }
        })

    };
  */


    if (loggedIn == 'no') {
        return <Router><Login login={login} loggedIn={loggedIn}/></Router>
    }


    return (<Router>

        <div className="h-screen flex overflow-hidden bg-gray-100">


            <MobileSideNav/>
            <SideNav/>

            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                        aria-label="Open sidebar">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                    <div className="pt-2 pb-6 md:py-6">
                        <TopHeader/>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <Switch>
                                <Route path='/' exact render={props => (<Dashboard {...props} loggedIn={loggedIn}/>)}/>
                            </Switch>
                        </div>
                    </div>
                </main>
            </div>
        </div>


    </Router>);


};

export default App;