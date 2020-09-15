/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 15 Sep 2020 13:00:47 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CREATE_PAYMENT = gql`
    mutation CreatePayment( $name: String!) {
        createPayment( name: $name) {
            name
        }
    }
`;

const NewPayment = () => {

    let history = useHistory();
    const [createPayment] = useMutation(CREATE_PAYMENT);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createPayment,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new payment a identification name</Trans>,

            fields: [{
                key: 'name', label: <Trans>Payment ID</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the payment</Trans>}
                        placeholder={i18nMark('payment id')}
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
        title={<Trans>New payment</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewPayment;