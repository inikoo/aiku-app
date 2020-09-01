/*
 Author: Kohani (kohani@aiku.io)
 Created: Wed, 19 Aug 2020 17:11:14 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const CUSTOMER = gql`
    query Customer($customerSlug: String!) {
        customer(slug: $customerSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_CUSTOMER = gql`
    mutation UpdateCustomer($id: ID!, $name: String!) {
        updateCustomer(id: $id, name: $name) {
            id
            name
        }
    }
`;

function CustomerShowcase(props) {

    let {customerSlug} = useParams();
    const [updateCustomer] = useMutation(UPDATE_CUSTOMER);


    const {loading, error, data} = useQuery(CUSTOMER, {
        variables: {customerSlug},

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

        handleSubmit: updateCustomer,

        modelID: {name: 'id', value: data['customer'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new customer a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location of the customer</Trans>}
                    placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
                    hint='&nbsp;'
                    value={data['customer'].name}
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
        title={data['customer'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Customer = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <CustomerShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Customer;