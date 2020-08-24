/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 24 Aug 2020 17:06:23 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const AREA = gql`
    query Ares($areaSlug: String!) {
        area(slug: $areaSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_AREA = gql`
    mutation UpdateArea($id: ID!, $name: String!) {
        updateArea(id: $id, name: $name) {
            id
            name
        }
    }
`;

function AreaShowcase(props) {

    let {areaSlug} = useParams();
    const [updateArea] = useMutation(UPDATE_AREA);


    const {loading, error, data} = useQuery(AREA, {
        variables: {areaSlug},

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

        handleSubmit: updateArea,

        modelID: {name: 'id', value: data['area'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your area a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the area</Trans>}
                    placeholder={i18nMark('area')}
                    hint='&nbsp;'
                    value={data['area'].name}
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
        title={data['area'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Area = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <AreaShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Area;
