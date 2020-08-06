import React from 'react';
import apiClient from '../services/api';
import {Redirect} from "react-router-dom";

const Aiku = (props) => {
    const [aiku, setAiku] = React.useState([]);




    if (props.loggedIn) {
        return (
            <div>

               In
            </div>


        );
    }
    return <Redirect to='/login' />

};

export default Aiku;