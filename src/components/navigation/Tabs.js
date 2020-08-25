/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 26 Aug 2020 00:13:50 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import { I18n } from "@lingui/react"
import { t } from "@lingui/macro"

const Option = (props) => {


    return (
        <I18n>
            {({ i18n }) => (
                <option>{i18n._(t`${Object.values(props)[0].label}`)}</option>
            )}
        </I18n>
    )
}

const Tab = (props) => {


    const key=Object.keys(props.tab)[0];



    const selected=(key === props.currentTab);

    return (
        <I18n>
            {({ i18n }) => (
                <button onClick={() => props.changeTab(key)}

                        className={`header whitespace-no-wrap  pb-1 px-1 border-b-2 text-sm leading-5 ${selected ? "border-indigo-500  text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"}`}>
                            {i18n._(t`${Object.values(props.tab)[0].label}`)}
                        </button>
            )}
        </I18n>
    )
}

const Tabs = (props) => {


    return ( <div className="relative pb-5 border-b border-gray-200 space-y-4 sm:pb-0">
        <div className="space-y-3 md:flex md:items-center md:justify-between md:space-y-0">

            <div className="flex space-x-3 md:absolute md:top-3 md:right-0">

            </div>
        </div>
        <div>
            <div className="sm:hidden">
                <select aria-label="Selected tab"
                        className="form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150">

                    {props.tabs.map((tab) => <Option {...tab}  />)}


                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">

                    {props.tabs.map((tab) => (
                       <Tab currentTab={props.currentTab} changeTab={props.changeTab} tab={tab}/>
                    ))}




                </nav>
            </div>
        </div>
    </div>);


};

export default Tabs;

