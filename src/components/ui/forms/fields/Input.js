/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 21 Aug 2020 00:34:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {useFormContext} from "react-hook-form";
import React from 'react';


const Input = (props) => {
    const { register } = useFormContext(); // retrieve all hook methods

    return (<>
        <div className="flex max-w-lg justify-between">
            <label htmlFor="{props.name}" className="block text-sm font-medium leading-5 text-gray-700">{props.label}</label>
            <span className="text-sm leading-5 text-gray-500" >{props.requeriments}</span>
        </div>

        <div className="mt-1 max-w-lg rounded-md shadow-sm">
            <input id={props.name} name={props.name} ref={register} defaultValue={props.value} className="form-input block w-full sm:text-sm sm:leading-5" placeholder={props.placeholder} aria-describedby="`$(props.name)-description`"/>
        </div>
        <p className="mt-2 text-sm text-gray-500" id="`$(props.name)-description`">{props.help}</p>
    </>);


};

export default Input;