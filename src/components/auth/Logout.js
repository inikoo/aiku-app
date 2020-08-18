/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 22:52:29 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {logout} from "../../actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/pro-regular-svg-icons";
import {Trans} from '@lingui/react';


let Logout = ({logout}) => {
    return (<button onClick={logout} className="group flex items-center h-8 text-sm pl-5  pb-2 text-gray-300 hover:text-gray-100 transition ease-in-out duration-150">
        <FontAwesomeIcon
            className="fa-flip-horizontal mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
            icon={faSignOut}/>
        <span className="inline-block align-middle mb-1 pr-10 "><Trans>Log out</Trans></span>
    </button>);
};

const mapDispatchToProps = {
    logout: logout,
};
Logout = connect(null, mapDispatchToProps)(Logout);
export default Logout


