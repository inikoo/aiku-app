/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 21 Aug 2020 00:34:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const Input = (props) => {

    return (<div>
        <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">{props.label}</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input id="email" className="form-input block w-full sm:text-sm sm:leading-5" placeholder="you@example.com" aria-describedby="email-description"/>
        </div>
        <p className="mt-2 text-sm text-gray-500" id="email-description">Make your password short and easy to guess.</p>
    </div>);


};

export default Input;