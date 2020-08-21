/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 21 Aug 2020 00:34:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const Input = (props) => {

    return (<>
        <div className="flex max-w-lg justify-between">
            <label htmlFor="{props.key}" className="block text-sm font-medium leading-5 text-gray-700">{props.label}</label>
            <span className="text-sm leading-5 text-gray-500" >{props.requeriments}</span>
        </div>

        <div className="mt-1 max-w-lg rounded-md shadow-sm">
            <input id={props.key} className="form-input block w-full sm:text-sm sm:leading-5" placeholder={props.placeholder} aria-describedby="`$(props.key)-description`"/>
        </div>
        <p className="mt-2 text-sm text-gray-500" id="`$(props.key)-description`">{props.help}</p>
    </>);


};

export default Input;