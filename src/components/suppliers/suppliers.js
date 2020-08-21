/*
 Author: Kohani (kohani@aiku.io)
 Created: Wed, 19 Aug 2020 15:48:35 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const SUPPLIERS = gql`
    query Suppliers {
        Suppliers(first: 100) {
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


function SuppliersTable() {

    const {loading, error, data} = useQuery(SUPPLIERS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans>:(</p>;

    const res = data['suppliers'];
    const headers = [<Trans>Name</Trans>];

    const suppliers = res.data.map(obj => {
        return [<Link to={'/suppliers/suppliers/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No suppliers found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={suppliers}/>

}


const Suppliers = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Suppliers</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/suppliers/suppliers/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Suppliers</Trans>}
            metas={[]}
            actions={actions}
        />
        <SuppliersTable/>

    </div>);
};

export default Suppliers;

