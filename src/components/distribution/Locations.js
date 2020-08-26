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


const LOCATIONS = gql`
    query Locations {
        locations(first: 100) {
            paginatorInfo {
                total
                currentPage
                lastPage
            }
            data {
                id
                code
                created_at

            }
        }
    }
`;


function LocationsTable() {

    const {loading, error, data} = useQuery(LOCATIONS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    console.log (data)
    const res = data['locations'];
    const headers = [<Trans>Name</Trans>];

    const locations = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses/:warehouseSlug/areas/:areaSlug/locations/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No location found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={locations}/>

}


const WarehouseLocations = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Locations</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/distribution/warehouses/:warehouseSlug/areas/:areaSlug/locations/new")}
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
