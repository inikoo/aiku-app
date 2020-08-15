/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 14 Aug 2020 12:42:24 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import TableMultiline from "../ui/lists/tables/TableMultiline";
import {useQuery, gql} from '@apollo/client';
import AvatarCell from "../ui/lists/tables/cells/AvatarCell";
import TwoLineCell from "../ui/lists/tables/cells/TwoLineCell";
import T from "../wrappers/T";


const USERS = gql`
    query Users {
        users(first: 100) {
            paginatorInfo {
                total
                currentPage
                lastPage
            }
            data {
                id
                handle
                created_at
                userable {
                    __typename
                    ... on Employee {
                        id
                        slug
                        name
                    }
                    ... on Contractor {
                        id
                        slug
                        name
                    }
                }
            }
        }
    }
`;


function UsersTable() {

    const {loading, error, data} = useQuery(USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const headers = ['User', 'title', 'status', 'role', ''];

    console.log(data.users.data)

    const users = data.users.data.map(obj => {

        console.log(obj.userable)
        return [<AvatarCell name={obj.userable.name} property={obj.handle}/>, <TwoLineCell main={obj.userable.name} secondary={obj.handle}/>,

        ]
    })


    return <TableMultiline headers={headers} rows={users}/>

}


const Users = () => {

    return (<div>

        <div className="mt-2 md:flex md:items-center md:justify-between mb-3">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                    <T>Users</T>
                </h2>
            </div>

        </div>

        <UsersTable/>

    </div>);
};

export default Users;