/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 14 Aug 2020 12:53:55 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const Headers = (props) => {

    return props.headers.map((label) => (<>{label === '' ? <th className="px-6 py-3 border-b border-gray-200 bg-gray-50">&nbsp;</th> :
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            {label}
        </th>}</>))

}

const Rows = (props) => {

    return props.rows.map((row) => (<tr>
        {row.map((row) => {
            return (row)
        })}
    </tr>))

}

const TableMultiline = (props) => {

    return (<div className="flex flex-col mt-5">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <Headers headers={props.headers}/>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">


                    <Rows rows={props.rows}/>

                    </tbody>
                </table>
            </div>
        </div>
    </div>);


};

export default TableMultiline;