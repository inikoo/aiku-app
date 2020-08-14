/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 13 Aug 2020 18:54:28 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import {NavLink} from "react-router-dom";


const Breadcrumb = (props) => {

    if (props.last) {
        return (<><span key={props.to} className="text-gray-400">{props.label}</span></>)
    }

    return (<><NavLink key={props.to} to={props.to} className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">{props.label}</NavLink>
        <svg className="flex-shrink-0 mx-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
    </>)

}
//  <a to={match.url} className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">{breadcrumb}</a>
const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    const numberBreadcrumbs = breadcrumbs.length - 1;

    if (numberBreadcrumbs <= 0) {
        return ''
    }

    return (<div>


        <nav className="sm:hidden">
            <NavLink to={'/'} className="flex items-center text-sm leading-5 font-medium text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">
                <svg className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Back
            </NavLink>
        </nav>


        <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
            {breadcrumbs.map(({
                                  match, breadcrumb
                              }, key) => (<Breadcrumb to={match.url} label={breadcrumb} last={numberBreadcrumbs === key}/>


            ))}
        </nav>
    </div>);
}

export default Breadcrumbs;

// <a to={match.url} className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">{breadcrumb}</a>