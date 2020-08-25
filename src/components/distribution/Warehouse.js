/*
 Author: Kohani (kohani@aiku.io)
 Created: Thu, 20 Aug 2020 01:03:51 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useHistory, useParams} from "react-router";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import {faChessClockAlt} from "@fortawesome/pro-regular-svg-icons";

const WAREHOUSE = gql`
    query Warehouse($warehouseSlug: String!) {
        warehouse(slug: $warehouseSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_WAREHOUSE = gql`
    mutation UpdateWarehouse($id: ID!, $name: String!) {
        updateWarehouse(id: $id, name: $name) {
            id
            name
        }
    }
`;

function WarehouseShowcase(props) {

    const history = useHistory();
    let {warehouseSlug} = useParams();
    const [updateWarehouse] = useMutation(UPDATE_WAREHOUSE);


    const {loading, error, data} = useQuery(WAREHOUSE, {
        variables: {warehouseSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    let actions = [];

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: props.openEditView,
        });
    }

    if (!props.editing) {
        actions.push({
            'icon': faChessClockAlt,
            'label': <Trans>Areas</Trans>,
            'highlighted': false,
            'handleClick': ()=> {history.push("/distribution/warehouses/:warehouseSlug/areas")}
        });
    }


    const formStructure = {
        handleCancel: props.cancelEdit,

        handleSubmit: updateWarehouse,

        modelID: {name: 'id', value: data['warehouse'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new warehouse a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location of the clocking-machine</Trans>}
                    placeholder={i18nMark('name')}
                    hint='&nbsp;'
                    value={data['warehouse'].name}
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
        title={data['warehouse'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Warehouse = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <WarehouseShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Warehouse;