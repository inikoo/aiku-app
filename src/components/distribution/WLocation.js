/*
 Author: Kohani (kohani@aiku.io)
 Created: Wed, 26 Aug 2020 11:41:32 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import {useHistory, useParams} from "react-router";
import {faChessClockAlt} from "@fortawesome/pro-regular-svg-icons";

const LOCATION = gql`
    query Location($locationCode: String!) {
        location(code: $locationCode) {
            id
            code
            created_at,


        }
    }
`;
const UPDATE_LOCATION = gql`
    mutation UpdateLocation($id: ID!, $code: String!) {
        updateLocation(id: $id, code: $code) {
            id
            code
        }
    }
`;

function LocationShowcase(props) {

    const history = useHistory();
    let {locationCode} = useParams();
    const [updateLocation] = useMutation(UPDATE_LOCATION);


    const {loading, error, data} = useQuery(LOCATION, {
        variables: {locationCode},

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

        handleSubmit: updateLocation,

        modelID: {name: 'id', value: data['location'].id},

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
                    placeholder={i18nMark('name')}
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
