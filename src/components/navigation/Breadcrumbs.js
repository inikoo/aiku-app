/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 13 Aug 2020 18:54:28 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from "react";
import {NavLink} from "react-router-dom";


const Breadcrumb = (props) => {



    if (props.last) {
        return (<><span  className="text-gray-500">{props.label}</span></>)
    }

    return (<><NavLink to={props.to} className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">{props.label}</NavLink>
        <svg className="flex-shrink-0 mx-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
    </>)

}
const Breadcrumbs = (props) => {

    const breadcrumbs = props.breadcrumbs


    const numberBreadcrumbs = breadcrumbs.length - 1;

    if (numberBreadcrumbs <= 0) {
        return ''
    }

    return (<div  className="pt-1 pl-5 mb-2">




        <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
            {breadcrumbs.map(({
                                  match, breadcrumb
                              }, key) => (

                <Breadcrumb to={match.url} label={breadcrumb} index={key} last={numberBreadcrumbs===key}/>


            ))}
        </nav>
    </div>);
}

export default Breadcrumbs;

// <a to={match.url} className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">{breadcrumb}</a>