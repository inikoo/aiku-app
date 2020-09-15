/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 14 Sep 2020 14:24:03 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faIdCardAlt, faPencilAlt, faKey, faTh} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import Tabs from "../navigation/Tabs";
import {useHistory, useParams} from "react-router";
import Alert from "../ui/alerts/Alert";

const INVOICE = gql`
    query Invoice($invoiceSlug: String!) {
        invoice(slug: $invoiceSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_INVOICE = gql`
    mutation UpdateInvoice($id: ID!, $name: String!) {
        updateInvoice(id: $id, name: $name) {
            id
            name
        }
    }
`;

function Invoice() {

    let history = useHistory();


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }

    let {userHandle} = useParams();
    const [updateInvoice] = useMutation(UPDATE_INVOICE, {
        onCompleted(data) {


            if (history.location.pathname !== '/accounting/invoices/' + data['updateInvoice'].handle) {
                history.replace('/accounting/invoices/' + data['updateInvoice'].handle)

            }


        }
    });


    const {loading, error, data} = useQuery(INVOICE, {
        variables: {userHandle},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    if(data['invoice']===null){
        return <Alert type='error' text={<Trans>Not found</Trans>} />
    }


    const tabs = [

        {store: {label: 'Stores', content: <Trans>Invoices per store</Trans>}},

        {categories: {label: 'Categories', content: <Trans>Invoices per category</Trans>}},

        {invoices: {label: 'Invoices', content: <Trans>All invoices</Trans>}},

        {deleted: {label: 'Deleted', content: <Trans>All deleted invoices</Trans>}}];


    let metas = [];
    let actions = [];


    if (!editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: openEditView
        });
    }


    switch (data.user['userable'].__typename) {
        case 'Employee':
            metas.push({
                'icon': faIdCardAlt, 'label': <Trans>{data.user['userable'].name} (Employee)</Trans>
            });
            break;
        default:
            //
            break;

    }

    const postProcess = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            if (key === 'status') {
                obj[key] = (value === 'true');
            }
        }
        return obj
    }

    const formStructure = {

        postProcess: postProcess,

        handleCancel: cancelEdit,

        handleSubmit: updateInvoice,

        modelID: {name: 'id', value: data['invoice'].id},


        inputGroups: [{

            key: 'identification',

            fields: [

                {
                    key: 'handle',

                    label: <Trans>Invoice Id

                    </Trans>,

                    inputComponent: <Input

                        name='handle'
                        placeholder={i18nMark('invoice id')}
                        hint='&nbsp;'
                        value={data['invoice'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}
                    />
                },


            ],


        }]
    }

    return (<><HeaderMetaActions
        title={data['invoice'].name}
        metas={metas}
        actions={actions}

    />
        {editing ? <Form {...formStructure} /> : null}
        <Tabs tabs={tabs}/>

    </>)

}


export default Invoice;