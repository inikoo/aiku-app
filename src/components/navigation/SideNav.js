import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faUsers, faMailBulk, faStoreAlt} from '@fortawesome/pro-regular-svg-icons'
import ProfileNav from "./ProfileNav";
import Logout from "../Logout";


const SideNavLink = (props) => {


    return (<button
               className={`${props.selected ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white'} 
               group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 focus:bg-gray-700`}>
        <FontAwesomeIcon
            className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
            icon={props.icon}/>
        {props.text}
    </button>)

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
                        <SideNavLink text="Dashboard" icon={faTachometerAlt}/>
                        <SideNavLink text="Customers" icon={faUsers} selected={true}/>
                        <SideNavLink text="Mailroom" icon={faMailBulk}/>
                        <SideNavLink text="Products" icon={faStoreAlt}/>
                    </nav>
                </div>
                <ProfileNav/>

                <Logout/>
            </div>
        </div>
    </div>);


};

export default SideNav;