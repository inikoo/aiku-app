import React from 'react';
import {
    Link
} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faUsers, faMailBulk, faStoreAlt, faBadgePercent,faGlobe,faShoppingCart,faConveyorBeltAlt,faWarehouseAlt,faBox,faHandHoldingBox,faIndustry,faClipboardUser,faAbacus,faChartLine,faUsersClass,faSlidersH} from '@fortawesome/pro-regular-svg-icons'
import ProfileNav from "./ProfileLink";
import Logout from "../Logout";


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
                        <SideNavLink to="/" text="Dashboard" icon={faTachometerAlt}/>
                        <SideNavLink to="/customers" text="Customers" icon={faUsers} selected={true}/>
                        <SideNavLink to="/mailroom" text="Mailroom" icon={faMailBulk}/>
                        <SideNavLink to="/products" text="Products" icon={faStoreAlt}/>
                        <SideNavLink to="/offers" text="Offers" icon={faBadgePercent}/>
                        <SideNavLink to="/websites" text="Websites" icon={faGlobe}/>
                        <SideNavLink to="/orders" text="Orders" icon={faShoppingCart}/>
                        <SideNavLink to="/delivering" text="Delivering" icon={faConveyorBeltAlt}/>
                        <SideNavLink to="/warehouse" text="Warehouse" icon={faWarehouseAlt}/>
                        <SideNavLink to="/inventory" text="Inventory" icon={faBox}/>
                        <SideNavLink to="/suppliers" text="Suppliers" icon={faHandHoldingBox}/>
                        <SideNavLink to="/production" text="Production" icon={faIndustry}/>
                        <SideNavLink to="/hr" text="Human resources" icon={faClipboardUser}/>
                        <SideNavLink to="/accounting" text="Accounting" icon={faAbacus}/>
                        <SideNavLink to="/reports" text="Reports" icon={faChartLine}/>
                        <SideNavLink to="/users" text="Users" icon={faUsersClass}/>
                        <SideNavLink to="/settings" text="Settings" icon={faSlidersH}/>
                    </nav>
                </div>
                <ProfileNav/>

                <Logout/>
            </div>
        </div>
    </div>);


};

export default SideNav;