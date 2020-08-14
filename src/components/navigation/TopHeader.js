import React from 'react';
import {Link} from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";

const TopHeaderLink = (props) => {


    return (<Link to={props.to}
                  className={`${props.selected ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white'} 
                flex block px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 focus:bg-gray-700`}>
        {props.text}
    </Link>)
}

const TopHeader = () => {


    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center px-2 lg:px-0">
                    <div className="hidden lg:block lg:ml-6">
                        <div className="flex">
                                <TopHeaderLink to="/dashboard" text="Dashboard"/>
                                <TopHeaderLink to="/team" text="Team" selected={true}/>
                                <TopHeaderLink to="/projects" text="Projects"/>
                                <TopHeaderLink to="/calendar" text="Calendar"/>
                        </div>
                    </div>
                </div>


                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <input id="search"
                                   className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                                   placeholder="Search" type="search"/>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Main menu" aria-expanded="false">
                        {/* Icon when menu is closed. */}
                        {/* Menu open: "hidden", Menu closed: "block" */}
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        {/* Icon when menu is open. */}
                        {/* Menu open: "block", Menu closed: "hidden" */}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        {/*
          Mobile menu, toggle classes based on menu state.

          Menu open: "block", Menu closed: "hidden"
        */}
        <div className="hidden lg:hidden">
            <div className="px-2 pt-2 pb-3">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
                <a href="#"
                   className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium leading-6 text-white">Tom Cook</div>
                        <div className="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
                    </div>
                </div>
                <div className="mt-3 px-2">
                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Your
                        Profile</a>
                    <a href="#"
                       className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Settings</a>
                    <a href="#"
                       className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign
                        out</a>
                </div>
            </div>
        </div>
    </nav>
);


};

export default TopHeader;