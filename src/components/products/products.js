/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 01 Sep 2020 12:30:56 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const PRODUCTS = gql`
    query Products {
        products(first: 100) {
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


function ProductsTable() {

    const {loading, error, data} = useQuery(PRODUCTS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['products'];
    const headers = [<Trans>Name</Trans>];

    const clockingMachines = res.data.map(obj => {
        return [<Link to={'/products/lists/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No clocking machines found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={products}/>

}


const Products = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Products</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/products/lists/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Products</Trans>}
            metas={[]}
            actions={actions}
        />
        <ProductsTable/>

    </div>);
};

export default Products;

