/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Sat, 15 Aug 2020 21:57:03 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const TwoLineCell = (props) => {

    return (<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{props.main}</div>
        <div className="text-sm leading-5 text-gray-500">{props.secondary}</div>
    </td>);


};

export default TwoLineCell;