/*
 Author: Kohani (kohani@aiku.io)
 Created: Sun, 30 Aug 2020 12:02:52 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CREATE_CUSTOMER = gql`
    mutation CreateCustomer( $name: String!) {
        createCustomer( name: $name) {
            name
        }
    }
`;

const NewCustomer = () => {

    let history = useHistory();
    const [createCustomer] = useMutation(CREATE_CUSTOMER);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createCustomer,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new customer a identification name</Trans>,



            fields: [{
                key: 'name', label: <Trans>Name</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the location of the clocking-machine. E.g. Office or Production room</Trans>}
                        placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
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
        title={<Trans>New customer</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewCustomer;