/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 01 Sep 2020 14:12:35 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const ORDER = gql`
    query Order($orderSlug: String!) {
        order(slug: $orderSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_ORDER = gql`
    mutation UpdateOrder($id: ID!, $name: String!) {
        updateOrder(id: $id, name: $name) {
            id
            name
        }
    }
`;

function OrderShowcase(props) {

    let {orderSlug} = useParams();
    const [updateOrder] = useMutation(UPDATE_ORDER);


    const {loading, error, data} = useQuery(ORDER, {
        variables: {orderSlug},

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

        handleSubmit: updateOrder,

        modelID: {name: 'id', value: data['order'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new order a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location of the order</Trans>}
                    placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
                    hint='&nbsp;'
                    value={data['order'].name}
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
        title={data['order'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Order = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <OrderShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Order;