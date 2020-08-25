/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 25 Aug 2020 11:57:50 Singapore Standard Time, Kuala Lumpur, Malaysia
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
import {faChessClockAlt} from "@fortawesome/pro-regular-svg-icons";


const CREATE_WAREHOUSE_LOCATION = gql`
    mutation CreateWarehouseLocation( $name: String!) {
        createWarehouseLocation( name: $name) {
            name
        }
    }
`;

const NewWarehouseLocation = () => {

    const history = useHistory();

    const [createWarehouseLocation] = useMutation(CREATE_WAREHOUSE_LOCATION);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createWarehouseLocation,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new warehouse location a identification name</Trans>,



            fields: [{
                key: 'name', label: <Trans>Name</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the warehouse location.</Trans>}
                        placeholder={i18nMark('location')}
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
        title={<Trans>New Location</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)




};

export default NewWarehouseLocation;