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


const WAREHOUSE_LOCATIONS = gql`
    query WarehouseLocations($WarehouseLocationsSlug: String!) {
        WarehouseLocations(slug: $WarehouseLocationsSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;


function LocationsTable() {

    const {loading, error, data} = useQuery(WAREHOUSE_LOCATIONS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['WarehouseLocations'];
    const headers = [<Trans>Name</Trans>];

    const WarehouseLocations = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses/new/area/newArea/location' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No location found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={WarehouseLocations}/>

}


const WarehouseLocations = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Locations</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/distribution/warehouses/new/area/newArea/location/newLocation")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Locations</Trans>}
            metas={[]}
            actions={actions}
        />
        <LocationsTable/>

    </div>);
};

export default WarehouseLocations;
