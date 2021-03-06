/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 18:54:27 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import MobileSideNav from "./components/navigation/MobileSideNav";
import SideNav from "./components/navigation/SideNav";
import TopHeader from "./components/navigation/TopHeader";

import Footer from "./components/navigation/Footer";
import {login} from "./actions";
import {connect} from "react-redux";
import routes from "./routes/routes";
import { ApolloProvider} from '@apollo/client';
import apolloClient from "./services/apolloClient";




let Aiku = ({loggedIn}) => {

    const [mobileSideNavIsOpen, setMobileSideNavIsOpen] = useState(false);

    const showMobileSideNav = () => {
        setMobileSideNavIsOpen(true);
    }
    const hideMobileSideNav = () => {
        setMobileSideNavIsOpen(false);
    }


    if (loggedIn) {


        return (<Router>
            <ApolloProvider client={apolloClient}>

            <div className="h-screen flex overflow-hidden bg-gray-100">
                <MobileSideNav hideMobileSideNav={hideMobileSideNav} mobileSideNavIsOpen={mobileSideNavIsOpen} />


                <SideNav />
                <div className="flex flex-col w-0 flex-1 overflow-hidden">

                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                        <div className=" pb-6 ">

                            <TopHeader mobileSideNavIsOpen={mobileSideNavIsOpen} showMobileSideNav={showMobileSideNav}/>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <Switch>

                                    {routes.map(({path, name, Component}, key) => (<Route
                                        exact
                                        path={path}
                                        key={key}
                                        render={props => {
                                            return (<Component {...props} />);
                                        }}
                                    />))}


                                </Switch>
                            </div>
                        </div>
                    </main>
                    <Footer/>

                </div>
            </div>
            </ApolloProvider>
        </Router>);
    }

    return <Router><Login login={login} loggedIn={loggedIn}/></Router>


};

const mapStateToProps = state => ({

    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = {
    login: login,
};

Aiku = connect(mapStateToProps, mapDispatchToProps)(Aiku);

export default Aiku;