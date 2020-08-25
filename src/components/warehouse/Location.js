/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 25 Aug 2020 11:53:47 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const WAREHOUSE_LOCATION = gql`
    query WarehouseLocation($WarehouseLocationSlug: String!) {
        warehouse_location(slug: $WarehouseLocationSlug) {
            id
            slug
            name
        }
    }
`;
const UPDATE_WAREHOUSE_LOCATION = gql`
    mutation UpdateWarehouseLocation($id: ID!, $name: String!) {
        updateWarehouseLocation(id: $id, name: $name) {
            id
            name
        }
    }
`;

function LocationShowcase(props) {

    let {WarehouseLocationSlug} = useParams();
    const [updateWarehouseLocation] = useMutation(UPDATE_WAREHOUSE_LOCATION);


    const {loading, error, data} = useQuery(WAREHOUSE_LOCATION, {
        variables: {WarehouseLocationSlug},

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
        handleCancel: props.cancelEdit,

        handleSubmit: updateWarehouseLocation,

        modelID: {name: 'id', value: data['area'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your location a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location</Trans>}
                    placeholder={i18nMark('location')}
                    hint='&nbsp;'
                    value={data['location'].name}
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
        title={data['location'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Location = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <LocationShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Location;
