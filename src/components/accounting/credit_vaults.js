/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 15 Sep 2020 13:29:11 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const CREDIT_VAULTS = gql`
    query Credit_vaults {
        credit_vaults(first: 100) {
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

function CreditVaultsTable() {

    const {loading, error, data} = useQuery(CREDIT_VAULTS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['credit_vaults'];
    const headers = [<Trans>Code</Trans>, <Trans>Store name</Trans>, <Trans>Customers with credits</Trans>, <Trans>Credit amount</Trans>, <Trans>Credit EUR</Trans>, <Trans>Customers with debit</Trans>, <Trans>Debit amount</Trans>,''];



    const credit_vaults = res.data.map(obj => {
        return [
            <Link to={'/accounting/credits/' + obj.slug}>{obj.name}</Link>,
        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No invoices found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={credit_vaults}/>

}


const Credit_Vaults = () => {

    const history = useHistory();

    const actions = [{
        'icon': faPlus,
        'label': <Trans>Credit vaults</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/accounting/credits/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Credit vaults</Trans>}
            metas={[]}
            actions={actions}
        />
        <CreditVaultsTable/>


    </div>);
};

export default Credit_Vaults;