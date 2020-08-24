/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 21 Aug 2020 00:34:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {useFormContext} from "react-hook-form";
import React, {useState} from 'react';


const Toggle = (props) => {
    const {register} = useFormContext();

    const [isOn, setIsOn] = useState(props.value)

    const handleToggling = () => {


        if (isOn) {
            setIsOn(false);
        } else {
            setIsOn(true);
        }

    }

    return (<>


        <input name={props.name} type="hidden" value={isOn}  onChange={handleToggling.bind()} ref={register()}/>
        <span onClick={handleToggling} role="checkbox" tabIndex="0" aria-checked={isOn}
              className={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}>

           <span aria-hidden="true" className="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200">

               <span className={`${isOn ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>

               <span className={`${isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
      <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
        <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
      </svg>
    </span>
  </span>
</span>

    </>);


};

export default Toggle;

