/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 23:02:18 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {logout} from "../../actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/pro-regular-svg-icons";
import T from "../wrappers/T";


let MobileLogout = ({logout}) => {
    return (<span className="inline-flex rounded-md shadow-sm">
  <button type="button" onClick={logout}
          className="inline-flex items-center px-3 py-0 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
 <FontAwesomeIcon
     className="fa-fw fa-flip-horizontal mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
     icon={faSignOut}/>
      <T>Out</T>
  </button>
</span>);
};

const mapDispatchToProps = {
    logout: logout,
};
MobileLogout = connect(null, mapDispatchToProps)(MobileLogout);
export default MobileLogout


