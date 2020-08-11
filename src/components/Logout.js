/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 20:31:12 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {logout} from "../actions";
import {connect} from "react-redux";


let Logout = ({logout}) => {
    return (<footer className="bg-gray-800 h-6 text-xs  pl-5 pb-2 text-gray-200">
        <button onClick={logout} className="inline-block align-middle ">Log out</button>
    </footer>);
};

const mapDispatchToProps = {
    logout: logout,
};
Logout = connect(null, mapDispatchToProps)(Logout);
export default Logout


