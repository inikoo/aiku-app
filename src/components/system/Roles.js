/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 14 Aug 2020 14:33:28 Singapore Standard Time, Kuala Lumpur, Malaysia
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
import Alert from "../ui/alerts/Alert";
import {useHistory} from "react-router";



const ROLES = gql`
    query Roles {
        roles(first: 100) {
            paginatorInfo {
                total
                currentPage
                lastPage
            }
            data {
                id
                slug
                name
                created_at

            }
        }
    }
`;


function RolesTable() {

    const {loading, error, data} = useQuery(ROLES);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['roles'];
    const headers = [<Trans>Name</Trans>, 'Payroll ID', 'Position', 'user', ''];


    const roles = res.data.map(obj => {
        return [<Link to={'/system/roles/' + obj.slug}><AvatarCell slug={obj.slug} name={obj.name}/></Link>, <TwoLineCell main={obj.name} secondary={obj.name}/>,

        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No roles found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={roles}/>

}


const Roles = () => {

    const history = useHistory();

    const actions = [{
        'icon': faPlus,
        'label': <Trans>Roles</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/system/roles/new")}

    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Roles</Trans>}
            metas={[]}
            actions={actions}
        />
        <RolesTable/>

    </div>);
};

export default Roles;