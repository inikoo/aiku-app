
/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 12:35:47 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Link} from "react-router-dom";



const TopHeaderLink = (props) => {


    return (<Link to={props.to}
                  className={`${props.selected ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white'} 
                flex block px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 focus:bg-gray-700`}>
        {props.text}
    </Link>)
}


const TopNav = () => {


    return ( <div className="flex items-center px-2 lg:px-0">
        <div className="hidden lg:block lg:ml-0">
            <div className="flex">
                <TopHeaderLink to="/dashboard" text="Dashboard"/>
                <TopHeaderLink to="/team" text="Team" />
                <TopHeaderLink to="/projects" text="Projects"/>
                <TopHeaderLink to="/calendar" text="Calendar"/>
            </div>

        </div>
    </div>);


};

export default TopNav;