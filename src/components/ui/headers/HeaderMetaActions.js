/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 19 Aug 2020 20:43:04 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Trans} from "@lingui/macro";


const Meta = (props) => {
    return (<div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <FontAwesomeIcon
            className="mr-5 mr-1.5 h-5 w-3 text-base text-gray-400 "
            icon={props.icon}/>
        {props.label}
    </div>)
}

const Action = (props) => {



    if(props.highlighted){
        return(<span className="sm:ml-3 shadow-sm rounded-md">
      <button onClick={props.handleClick} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
          <FontAwesomeIcon className="-ml-1 mr-2 h-5 w-5" icon={props.icon}/>
          {props.label}
      </button>
    </span>
        )
    }

    return (<span className="hidden sm:block shadow-sm rounded-md">
      <button type="button" onClick={props.handleClick}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
         <FontAwesomeIcon
             className="-ml-1 mr-2 h-5 w-5 text-gray-500 "
             icon={props.icon}/>
          {props.label}
      </button>
    </span>)
}

const HeaderMetaActions = (props) => {

    return (
        <div className="mb-5 lg:flex lg:items-center lg:justify-between pt-4">
        <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                {props.title}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                {props.metas.map((args) => (<Meta {...args}  />))}
            </div>
        </div>


        <div className="mt-5 flex lg:mt-0 lg:ml-4">
            {props.actions.map((args) => (<Action {...args}  />))}





            {/* Dropdown */}
            <span className="ml-3 relative shadow-sm rounded-md sm:hidden">
      <button type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
              id="mobile-menu" aria-haspopup="true">
          <Trans>More</Trans>
        <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </button>

                {/*
                  Dropdown panel, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-200"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                */}
                <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg" aria-labelledby="mobile-menu" role="menu">
        <div className="py-1 rounded-md bg-white shadow-xs">
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Edit</a>
        </div>
      </div>
    </span>
        </div>
    </div>);


};

export default HeaderMetaActions;