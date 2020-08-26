

/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 26 Aug 2020 12:54:57 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const Cell = (props) => {

    return (<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{props.content}</td>);


};

export default Cell;