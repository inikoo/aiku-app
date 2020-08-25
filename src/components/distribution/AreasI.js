/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 24 Aug 2020 16:28:35 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const WAREHOUSE_AREA = gql`
    query WarehouseArea($WarehouseAreaSlug: String!) {
        WarehouseArea(slug: $WwarehouseAreaSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;


function AreaTable() {

    const {loading, error, data} = useQuery(WAREHOUSE_AREA);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['WarehouseArea'];
    const headers = [<Trans>Name</Trans>];

    const area = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses/new/area' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No area found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={area}/>

}


const Area = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Area</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/distribution/warehouses/new/area/newArea")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Area</Trans>}
            metas={[]}
            actions={actions}
        />
        <AreaTable/>

    </div>);
};

export default Area;

