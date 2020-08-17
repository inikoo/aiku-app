import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import ProfileNav from "./ProfileLink";
import Logout from "../auth/Logout";
import {modules} from "../../routes/modules";


const SideNavLink = (props) => {


    return (<Link to={props.to}
                  className={`${props.selected ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white'} 
               group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 focus:bg-gray-700`}>
        <FontAwesomeIcon
            className="fa-fw mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
            icon={props.icon}/>
        {props.text}
    </Link>)

}

const SideNav = () => {


    return (<div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-gray-800">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="AIku"/>
                    </div>
                    <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">

                        {modules.map((obj, key) => (
                            <SideNavLink key={key} to={obj.path} text={obj.text} icon={obj.icon}/>
                             ))
                        }
                    </nav>
                </div>
                <Logout/>
                <ProfileNav/>
                <footer className="bg-gray-800 h-6 text-xs  pl-5 pb-2 text-gray-200">
                </footer>

            </div>
        </div>
    </div>);


};

export default SideNav;