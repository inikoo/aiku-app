import React from 'react';
import {
    Link
} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faPeopleCarry, faProjectDiagram, faCalendarAlt, faFolders, faUsers, faMailBulk, faStoreAlt, faBadgePercent,faGlobe,faShoppingCart,faConveyorBeltAlt,faWarehouseAlt,faBox,faHandHoldingBox,faIndustry,faClipboardUser,faAbacus,faChartLine,faUsersClass,faSlidersH} from '@fortawesome/pro-regular-svg-icons'



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

const MobileSideNav = () => {


    return (

        <div className="md:hidden">
            <div className="fixed inset-0 flex z-40">
                <div className="fixed inset-0">
                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                        <button className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                            <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow"/>
                        </div>


                        <nav className="mt-5 px-2 space-y-1">
                            <MobileSideNavLink to="/dashboard" text="Dashboard" icon={faTachometerAlt}/>
                            <MobileSideNavLink to="/team" text="Team" icon={faPeopleCarry}/>
                            <MobileSideNavLink to="/projects" text="Projects" icon={faProjectDiagram}/>
                            <MobileSideNavLink to="/calendar" text="Calendar" icon={faCalendarAlt}/>
                            <MobileSideNavLink to="/documents" text="Documents" icon={faFolders}/>
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
                            <MobileSideNavLink to="/users" text="Users" icon={faUsersClass}/>
                            <MobileSideNavLink to="/settings" text="Settings" icon={faSlidersH}/>
                        </nav>
                    </div>


                    <div className="flex-shrink-0 flex bg-gray-700 p-4">
                        <a href="#" className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div>
                                    <img className="inline-block h-10 w-10 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-base leading-6 font-medium text-white">
                                        Tom Cook
                                    </p>
                                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                        View profile
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14">
                </div>
            </div>
        </div>

    );


};

export default MobileSideNav;