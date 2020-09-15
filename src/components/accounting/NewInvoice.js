/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 15 Sep 2020 11:35:11 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import Form from "../ui/forms/Form";
import Input from "../ui/forms/fields/Input";
import { i18nMark} from "@lingui/react";
import {useHistory} from "react-router";
import {gql, useMutation} from "@apollo/client";


const CREATE_INVOICE = gql`
    mutation CreateInvoice( $name: String!) {
        createInvoice( name: $name) {
            name
        }
    }
`;

const NewInvoice = () => {

    let history = useHistory();
    const [createInvoice] = useMutation(CREATE_INVOICE);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createInvoice,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new invoice a identification name</Trans>,

            fields: [{
                key: 'name', label: <Trans>Invoice ID</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the invoice</Trans>}
                        placeholder={i18nMark('invoice id')}
                        hint='&nbsp;'
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
            }]

        }]
    }

    return (<><HeaderMetaActions
        title={<Trans>New invoice</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewInvoice;