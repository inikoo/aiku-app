/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 17:50:22 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */


import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";

const CLOCKING_MACHINE = gql`
    query ClockingMachine($clockingMachineSlug: String!) {
        clocking_machine(slug: $clockingMachineSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_CLOCKING_MACHINE = gql`
    mutation UpdateClockingMachine($id: ID!, $name: String!) {
        updateClockingMachine(id: $id, name: $name) {
            id
            name
        }
    }
`;

function ClockingMachineShowcase(props) {

    let {clockingMachineSlug} = useParams();
    const [updateTodo] = useMutation(UPDATE_CLOCKING_MACHINE);


    const {loading, error, data} = useQuery(CLOCKING_MACHINE, {
        variables: {clockingMachineSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    let actions = [];

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: props.openEditView

        });
    }


    const formStructure = {
        handleCancel: props.cancelEdit, handleSubmit: updateTodo, modelID: {name: 'id', value: data['clocking_machine'].id}, inputGroups: [{
            key: 'identification', title: <Trans>Identification</Trans>, note: <Trans>Give your new clocking machine a identification name</Trans>,

            fields: [{
                key: 'name', label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location of the clocking-machine</Trans>}
                    placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
                    hint='&nbsp;'
                    value={data['clocking_machine'].name}
                    register={{
                        required: <Trans>This is required.</Trans>, maxLength: {
                            value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                        }
                    }}
                />
            }],


        }]
    }

    return (<><HeaderMetaActions
        title={data['clocking_machine'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const ClockingMachine = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <ClockingMachineShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default ClockingMachine;