/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 01 Sep 2020 12:10:43 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CREATE_PRODUCT = gql`
    mutation CreateProduct( $name: String!) {
        createProduct( name: $name) {
            name
        }
    }
`;

const NewProduct = () => {

    let history = useHistory();
    const [createProduct] = useMutation(CREATE_PRODUCT);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createProduct,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new product a identification name</Trans>,



            fields: [{
                key: 'name', label: <Trans>Name</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the location of the product</Trans>}
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
        title={<Trans>New product</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewProduct;