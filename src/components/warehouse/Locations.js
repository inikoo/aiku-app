/*
 Author: Kohani (kohani@aiku.io)
 Created: Thu, 20 Aug 2020 01:03:53 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const WAREHOUSE_LOCATION = gql`
    query WarehouseLocation($WarehouseLocationSlug: String!) {
        WarehouseLocation(slug: $WarehouseLocationSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;


function LocationTable() {

    const {loading, error, data} = useQuery(WAREHOUSE_LOCATION);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['WarehouseLocation'];
    const headers = [<Trans>Name</Trans>];

    const area = res.data.map(obj => {
        return [<Link to={'/warehouse/warehouses/new/area/newArea/location' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No location found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={WarehouseLocation}/>

}


const WarehouseLocation = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Location</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/warehouse/warehouses/new/area/newArea/location/newLocation")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Location</Trans>}
            metas={[]}
            actions={actions}
        />
        <LocationTable/>

    </div>);
};

export default WarehouseLocation;
