
/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 11:51:47 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const CheckBox = (props) => {

    return (<>
        <div className="max-w-lg">
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input id="comments" type="checkbox"
                           className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                    </div>
                <div className="ml-3 text-sm leading-5">
                    <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="candidates" type="checkbox"
                               className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                    </div>
                    <div className="ml-3 text-sm leading-5">
                        <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input id="offers" type="checkbox"
                               className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                    </div>
                    <div className="ml-3 text-sm leading-5">
                        <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                        <p className="text-gray-500">{props.help} Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>
            </div>
    </>);


};

export default Checkbox;