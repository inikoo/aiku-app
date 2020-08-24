/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 22:01:50 Malaysia Time, Kuala Lumpur, Malaysia
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


const CREATE_CLOCKING_MACHINE = gql`
    mutation CreateClockingMachine( $name: String!) {
        createClockingMachine( name: $name) {
            name
        }
    }
`;

const NewClockingMachine = () => {

    let history = useHistory();
    const [createClockingMachine] = useMutation(CREATE_CLOCKING_MACHINE);


    const cancelEdit = () => {
        history.goBack()
    }


    const formStructure = {

        handleCancel: cancelEdit, handleSubmit: createClockingMachine,


        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new clocking machine a identification name</Trans>,



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
        title={<Trans>New clocking-machine</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default NewClockingMachine;