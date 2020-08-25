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


const WAREHOUSES = gql`
    query Warehouses {
        warehouses(first: 100) {
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


function WarehousesTable() {

    const {loading, error, data} = useQuery(WAREHOUSES);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    console.log (data)
    const res = data['warehouses'];
    const headers = [<Trans>Name</Trans>];

    const warehouses = res.data.map(obj => {
        return [<Link to={'/distribution/warehouses/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No warehouse found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={warehouses}/>

}


const Warehouses = () => {

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
        <WarehousesTable/>

    </div>);
};

export default Warehouses;

