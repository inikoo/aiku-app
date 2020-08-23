/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 22:12:05 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from "@lingui/macro";
import { useForm, FormProvider } from "react-hook-form";


const Fields = (props) => {


    return props.fields.map((field) => (<>
            <div key={field.key} className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="{field.key}" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    {field.label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    {field.inputComponent}
                </div>
            </div>
        </>))


}

const InputGroup = (props) => {


    return (<div>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {props.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    {props.note}
                </p>
            </div>
            <div className="mt-6 sm:mt-5">

                <Fields fields={props.fields}/>
            </div>
        </div>)
}

const InputGroups = (props) => {


    return props.inputGroups.map((data) => (<InputGroup {...data}/>))

}

const Form = (props) => {

    const methods = useForm();
    const onSubmit = data => console.log(data);

    return ( <FormProvider {...methods} >
        <form  onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
            <InputGroups inputGroups={props.inputGroups}/>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-5">
            <div className="flex justify-end">
                <span className="inline-flex rounded-md shadow-sm">
        <button onClick={props.handleCancel} type="button"
                className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
            <Trans>Cancel</Trans>
        </button>
      </span>
                <span className="ml-3 inline-flex rounded-md shadow-sm">
                    <button type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        <Trans>Save</Trans>
                    </button>
                </span>
            </div>
        </div>
    </form></FormProvider>);


};


export default Form;