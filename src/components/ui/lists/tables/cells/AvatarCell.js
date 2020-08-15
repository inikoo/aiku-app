/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Sat, 15 Aug 2020 21:57:03 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import UserAvatar from "react-user-avatar";


const AvatarCell = (props) => {

    return (<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 text-white">

                <UserAvatar size="40" name={props.name}/>

            </div>
            <div className="ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">
                    {props.name}
                </div>
                <div className="text-sm leading-5 text-gray-500">
                    {props.property}
                </div>
            </div>
        </div>
    </td>);


};

export default AvatarCell;