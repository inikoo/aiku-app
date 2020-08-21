
/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 11:51:47 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const RadioButton = (props) => {

    return (<>
        <div className="sm:col-span-2">
            <div className="max-w-lg">
                <p className="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                <div className="mt-4">
                    <div className="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio"
                               className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                            <label htmlFor="push_everything" className="ml-3">
                                <span className="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                            </label>
                        </input>
                    </div>

                    <div className="mt-4 flex items-center">
                        <input id="push_email" name="push_notifications" type="radio"
                               className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                            <label htmlFor="push_email" className="ml-3">
                                <span className="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                            </label>
                        </input>
                    </div>

                    <div className="mt-4 flex items-center">
                        <input id="push_nothing" name="push_notifications" type="radio"
                               className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                            <label htmlFor="push_nothing" className="ml-3">
                                <span className="block text-sm leading-5 font-medium text-gray-700">{props.help}No push notifications</span>
                            </label>
                        </input>
                    </div>

                </div>
            </div>
        </div>
    </>);


};

export default RadioButton;