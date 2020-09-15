/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 15 Sep 2020 14:30:55 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CREATE_CREDIT_VAULT = gql`
    mutation CreateCredit_vault( $name: String!) {
        createCredit_vault( name: $name) {
            name
        }
    }
`;

const NewCreditVault = () => {

    let history = useHistory();
    const [createCredit_vault] = useMutation(CREATE_CREDIT_VAULT);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createCredit_vault,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new credit a identification name</Trans>,

            fields: [{
                key: 'name', label: <Trans>Credit ID</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the credits</Trans>}
                        placeholder={i18nMark('credit id')}
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
        title={<Trans>New Credit Vault</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewCreditVault;