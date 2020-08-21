/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Fri, 14 Aug 2020 12:42:24 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Table from "../ui/tables/Table";
import {useQuery, gql} from '@apollo/client';
import {Trans} from '@lingui/macro';

import AvatarCell from "../ui/tables/cells/AvatarCell";
import TwoLineCell from "../ui/tables/cells/TwoLineCell";
import {Link} from "react-router-dom";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPlus} from "@fortawesome/pro-solid-svg-icons";


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
                    ... on Admin {
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
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['users'];
    const headers = [<Trans>User</Trans>, <Trans>title</Trans>, <Trans>Status</Trans>, <Trans>Role</Trans>, ''];


console.log(res.data)

    const users = res.data.map(obj => {
        return [
            <Link to={'/system/users/' + obj.handle}><AvatarCell slug={obj.handle} name={obj.handle}/></Link>,
            <TwoLineCell main={obj["userable"].name} secondary={obj.handle}/>,

        ]
    })

    return <Table paginatorInfo={res.paginatorInfo} headers={headers} rows={users}/>

}


const Users = () => {

    const actions = [{
        'icon': faPlus, 'label': <Trans>Guest</Trans>, 'highlighted': false
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Users</Trans>}
            metas={[]}
            actions={actions}
        />
        <UsersTable/>

    </div>);
};

export default Users;