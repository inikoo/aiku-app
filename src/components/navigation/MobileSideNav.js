/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 14 Aug 2020 15:50:00 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {
    Link
} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTachometerAlt,
    faUsers,
    faMailBulk,
    faStoreAlt,
    faBadgePercent,
    faGlobe,
    faShoppingCart,
    faConveyorBeltAlt,
    faWarehouseAlt,
    faBox,
    faHandHoldingBox,
    faIndustry,
    faClipboardUser,
    faAbacus,
    faChartLine,
    faUsersClass,
    faSlidersH,
} from '@fortawesome/pro-regular-svg-icons'
import Transition from "../ui/helpers/Transition";
import ProfileNav from "./ProfileLink";
import MobileLogout from "../MobileLogout";


const MobileSideNavLink = (props) => {


    return (<Link to={props.to}
                  className={`${props.selected ? 'text-white bg-gray-0' : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white'} 
               group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 focus:bg-gray-700`}>
        <FontAwesomeIcon
            className="fa-fw mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
            icon={props.icon}/>
        {props.text}
    </Link>)

}

const MobileSideNav = (props) => {


    return (

        <Transition
            show={props.mobileSideNavIsOpen}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="md:hidden z-50">


                <div className="fixed inset-0 flex z-40">
                    <div className="fixed inset-0">
                        <div className="absolute inset-0 bg-gray-600 opacity-75">&nbsp;</div>
                    </div>

                    <Transition
                        show={props.mobileSideNavIsOpen}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                            <div className="absolute top-0 right-0 -mr-14 p-1">
                                <button onClick={props.hideMobileSideNav} className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                                    <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 h-0 pt-0 pb-4 overflow-y-auto">


                                <nav className="mt-5 px-2 space-y-1">
                                    <MobileSideNavLink to="/dashboard" text="Dashboard" icon={faTachometerAlt}/>
                                    <MobileSideNavLink to="/customers" text="Customers" icon={faUsers} selected={true}/>
                                    <MobileSideNavLink to="/mailroom" text="Mailroom" icon={faMailBulk}/>
                                    <MobileSideNavLink to="/products" text="Products" icon={faStoreAlt}/>
                                    <MobileSideNavLink to="/offers" text="Offers" icon={faBadgePercent}/>
                                    <MobileSideNavLink to="/websites" text="Websites" icon={faGlobe}/>
                                    <MobileSideNavLink to="/orders" text="Orders" icon={faShoppingCart}/>
                                    <MobileSideNavLink to="/delivering" text="Delivering" icon={faConveyorBeltAlt}/>
                                    <MobileSideNavLink to="/warehouse" text="Warehouse" icon={faWarehouseAlt}/>
                                    <MobileSideNavLink to="/inventory" text="Inventory" icon={faBox}/>
                                    <MobileSideNavLink to="/suppliers" text="Suppliers" icon={faHandHoldingBox}/>
                                    <MobileSideNavLink to="/production" text="Production" icon={faIndustry}/>
                                    <MobileSideNavLink to="/staff" text="Staff" icon={faClipboardUser}/>
                                    <MobileSideNavLink to="/accounting" text="Accounting" icon={faAbacus}/>
                                    <MobileSideNavLink to="/reports" text="Reports" icon={faChartLine}/>
                                    <MobileSideNavLink to="/system/users" text="Users" icon={faUsersClass}/>
                                    <MobileSideNavLink to="/settings" text="Settings" icon={faSlidersH}/>
                                </nav>
                            </div>

                            <ProfileNav/>


                            <div className="flex-shrink-0 flex bg-gray-700 p-4">
                                   <MobileLogout/>


                            </div>
                        </div>
                    </Transition>

                    <div className="flex-shrink-0 w-14">
                    </div>

                </div>
            </div>

        </Transition>


    );


};

export default MobileSideNav;