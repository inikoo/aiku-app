/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 24 Aug 2020 14:57:56 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Table from "../ui/tables/Table";
import {useQuery, gql} from '@apollo/client';
import {Trans} from '@lingui/macro';

import {Link} from "react-router-dom";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPlus} from "@fortawesome/pro-solid-svg-icons";
import Alert from "../ui/alerts/Alert";
import {useHistory} from "react-router";


const WAREHOUSE = gql`
    query Warehouse($warehouseSlug: String!) {
        warehouse(slug: $warehouseSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;


function WarehouseTable() {

    const {loading, error, data} = useQuery(WAREHOUSE);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['warehouse'];
    const headers = [<Trans>Name</Trans>];

    const warehouse = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No warehouse found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={warehouse}/>

}


const Warehouse = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Warehouse</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/distribution/warehouses/new")},

    }];


    return (<div>
        <HeaderMetaActions
            title={<Trans>Warehouse</Trans>}
            metas={[]}
            actions={actions}
        />
        <WarehouseTable/>

    </div>);
};

export default Warehouse;

