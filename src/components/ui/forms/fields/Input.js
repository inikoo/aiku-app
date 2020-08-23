/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 21 Aug 2020 00:34:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {useFormContext} from "react-hook-form";
import React from 'react';
import { ErrorMessage } from '@hookform/error-message';


const Input = (props) => {
    const { register ,errors} = useFormContext(); // retrieve all hook methods

    return (<>
        <div className="flex max-w-lg justify-between">
            <p className="block text-sm text-red-600">
                <ErrorMessage errors={errors} name={props.name}>
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p  key={type}>{message} </p>
                        ))
                    }
                </ErrorMessage>
            </p>
            <span className="text-sm leading-5 text-gray-500" >{props.hint}</span>
        </div>

        <div className="mt-1 max-w-lg rounded-md shadow-sm relative">
            <input id={props.name} name={props.name}  ref={register(props.register)} defaultValue={props.value}
                   className={`form-input  w-full sm:text-sm sm:leading-5 ${errors['name'] ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red" : "block"}` }


            placeholder={props.placeholder} aria-describedby="`$(props.name)-description`"/>

            {errors['name'] && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
            </div>}



        </div>



        <p className="mt-2 text-sm text-gray-500" id="email-description">{props.help}</p>

    </>);


};

export default Input;

