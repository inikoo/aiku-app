/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 24 Aug 2020 17:06:23 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const WAREHOUSE_AREA = gql`
    query WarehouseArea($warehouseAreaSlug: String!) {
        warehouse_area(slug: $warehouseAreaSlug) {
            id
            slug
            name
            created_at,
        }
    }
`;
const UPDATE_WAREHOUSE_AREA = gql`
    mutation UpdateWarehouseArea($id: ID!, $name: String!) {
        updateWarehouseArea(id: $id, name: $name) {
            id
            name
        }
    }
`;

function WarehouseAreaShowcase(props) {

    const history = useHistory();
    let {warehouseAreaSlug} = useParams();
    const [updateWarehouseArea] = useMutation(UPDATE_WAREHOUSE_AREA);


    const {loading, error, data} = useQuery(WAREHOUSE_AREA, {
        variables: {warehouseAreaSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    let actions = [];

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: props.openEditView

        });
    }

        if (!props.editing) {
            actions.push({
                'icon': faChessClockAlt,
                'label': <Trans>Locations</Trans>,
                'highlighted': false,
                'handleClick': ()=> {history.push("/distribution/warehouses/:warehouseSlug/areas/:warehouseAreaSlug/locations")}
            });
        }



    const formStructure = {
        handleCancel: props.cancelEdit,

        handleSubmit: updateWarehouseArea,

        modelID: {name: 'id', value: data['warehouse_area'].id},

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
                    value={data['warehouse_area'].name}
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
        title={data['warehouse_area'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const WarehouseArea = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <WarehouseAreaShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default WarehouseArea;
