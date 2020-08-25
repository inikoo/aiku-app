/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 24 Aug 2020 16:15:53 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const CREATE_WAREHOUSE = gql`
    mutation CreateWarehouse( $name: String!) {
        createWarehouse( name: $name) {
            name
        }
    }
`;

const NewWarehouse = () => {

    const history = useHistory();

    const actions = [
        {
            'icon': faChessClockAlt,
            'label': <Trans>Area</Trans>,
            'highlighted': false,
            'handleClick': ()=> {history.push("/distribution/warehouses/new/area")}

        }];

    const [createWarehouse] = useMutation(CREATE_WAREHOUSE);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createWarehouse,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new warehouse a identification name</Trans>,



            fields: [{
                key: 'name', label: <Trans>Name</Trans>, inputComponent:
                    <Input
                        name='name'
                        help={<Trans>Used to identify the warehouse.</Trans>}
                        placeholder={i18nMark('name')}
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
        title={<Trans>New Warehouse</Trans>}
        metas={[]}
        actions={actions}

    />
        <Form {...formStructure} />
    </>)




};

export default NewWarehouse;