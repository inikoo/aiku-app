
/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 11:51:47 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const UploadImage = (props) => {

    return (<>
        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="mt-1 text-sm text-gray-600">
                    <button type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                        Upload a file
                    </button>
                    or drag and drop
                </p>
                <p className="mt-1 text-xs text-gray-500">
                    {props.help}
                </p>
            </div>
        </div>
    </>);


};

export default UploadImage;