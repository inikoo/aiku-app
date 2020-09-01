/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 01 Sep 2020 14:12:30 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const ORDERS = gql`
    query Orders {
        orders(first: 100) {
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


function OrdersTable() {

    const {loading, error, data} = useQuery(ORDERS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['orders'];
    const headers = [<Trans>Name</Trans>];

    const orders = res.data.map(obj => {
        return [<Link to={'/orders/lists/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No orders found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={orders}/>

}


const Orders = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Order</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/orders/lists/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Orders</Trans>}
            metas={[]}
            actions={actions}
        />
        <OrdersTable/>

    </div>);
};

export default Orders;

