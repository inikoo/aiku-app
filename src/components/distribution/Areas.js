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


const WAREHOUSE_AREAS = gql`
    query WarehouseAreas {
        warehouse_areas(first: 100) {
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


function AreasTable() {

    const {loading, error, data} = useQuery(WAREHOUSE_AREAS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['warehouse_areas'];
    const headers = [<Trans>Name</Trans>];

    const warehouseAreas = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses/:warehouseSlug/areas/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No area found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={warehouseAreas}/>

}


const Areas = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Area</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/distribution/warehouses/:warehouseSlug/areas/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Areas</Trans>}
            metas={[]}
            actions={actions}
        />
        <AreasTable/>

    </div>);
};

export default Areas;

