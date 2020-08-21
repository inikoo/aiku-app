
/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 11:51:47 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const Textarea = (props) => {

    return (<>
        <div className="max-w-lg flex rounded-md shadow-sm">
            <textarea id="about" rows="3"
                      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"> </textarea>
        </div>
        <p className="mt-2 text-sm text-gray-500">{props.help}</p>
    </>);


};

export default Textarea;