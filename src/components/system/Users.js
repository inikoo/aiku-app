/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 14 Aug 2020 12:42:24 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import TableMultiline from "../ui/lists/tables/TableMultiline";

const Users = () => {

    return (<div>

            <div className="mt-2 md:flex md:items-center md:justify-between mb-3">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                        Users
                    </h2>
                </div>

            </div>


            <TableMultiline/>

        </div>);
};

export default Users;