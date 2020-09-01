/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 01 Sep 2020 12:32:32 Singapore Standard Time, Kuala Lumpur, Malaysia
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

const PRODUCT = gql`
    query Product($productSlug: String!) {
        clocking_machine(slug: $productSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($id: ID!, $name: String!) {
        updateProduct(id: $id, name: $name) {
            id
            name
        }
    }
`;

function ProductShowcase(props) {

    let {productSlug} = useParams();
    const [updateProduct] = useMutation(UPDATE_PRODUCT);


    const {loading, error, data} = useQuery(PRODUCT, {
        variables: {productSlug},

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

        handleSubmit: updateProduct,

        modelID: {name: 'id', value: data['product'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new product a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the location of the product</Trans>}
                    placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
                    hint='&nbsp;'
                    value={data['product'].name}
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
        title={data['product'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const Product = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <ProductShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Product;