/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 15 Sep 2020 10:46:51 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const INVOICES = gql`
    query Invoices {
        invoices(first: 100) {
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

function InvoicesTable() {

    const {loading, error, data} = useQuery(INVOICES);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['invoices'];
    const headers = [<Trans>Code</Trans>, <Trans>Name</Trans>, <Trans>Invoices</Trans>, <Trans>Refunds</Trans>, <Trans>%Ref</Trans>,''];



    const invoices = res.data.map(obj => {
        return [
            <Link to={'/accounting/invoices/' + obj.slug}>{obj.name}</Link>,
        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No invoices found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={invoices}/>

}


const Invoices = () => {

    const history = useHistory();

    const actions = [{
        'icon': faPlus,
        'label': <Trans>Invoice</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/accounting/invoices/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Invoice</Trans>}
            metas={[]}
            actions={actions}
        />
        <InvoicesTable/>

    </div>);
};

export default Invoices;