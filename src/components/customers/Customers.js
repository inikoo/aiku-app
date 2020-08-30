/*
 Author: Kohani (kohani@aiku.io)
 Created: Sun, 30 Aug 2020 12:02:58 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CUSTOMERS = gql`
    query Customers {
        customers(first: 100) {
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


function CustomersTable() {

    const {loading, error, data} = useQuery(CUSTOMERS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['customers'];
    const headers = [<Trans>Name</Trans>];

    const customers = res.data.map(obj => {
        return [<Link to={'/customers/customer/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No customers found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={customers}/>

}


const Customers = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Customer</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/customers/customer/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Customers</Trans>}
            metas={[]}
            actions={actions}
        />
        <CustomersTable/>

    </div>);
};

export default Customers;

