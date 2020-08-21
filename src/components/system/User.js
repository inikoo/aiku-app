/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 14 Aug 2020 14:32:39 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {
    faIdCardAlt, faPencilAlt
} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";

const USER = gql`
    query User($userHandle: String!) {
        user(handle: $userHandle) {
            id
            handle
            created_at
            userable {
                __typename
                ... on Employee {
                    id
                    slug
                    name
                }
                ... on Contractor {
                    id
                    slug
                    name
                }
                ... on Admin {
                    id
                    slug
                    name
                }
            }
        }
    }
`;


function UserShowcase(props) {

    let {userHandle} = useParams();


    const {loading, error, data} = useQuery(USER, {
        variables: {userHandle},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    let metas = [];
    let actions = [];

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: props.openEditView

        });
    }

    switch (data.user['userable'].__typename) {
        case 'Employee':
            metas.push({
                'icon': faIdCardAlt, 'label': <Trans>{data.user['userable'].name} (Employee)</Trans>
            });
            break;
        default:
            //
            break;

    }


    const formStructure = {
        handleCancel: props.cancelEdit, inputGroups: [{
            title: <Trans>Identification</Trans>, note: <Trans>Give your new clocking machine a identification name</Trans>, fields: [{
                key: 'name', label: <Trans>Name</Trans>, inputComponent: <Input
                    help={<Trans>Used to identify the location of the clocking-machine. E.g. Office or Production room</Trans>}
                    placeholder={i18nMark('E.g. Main entrance, Office reception, etc ..')}
                    requeriments={<Trans>Required</Trans>}

                />
            }],


        }]
    }


    return (<><HeaderMetaActions
        title={data.user.handle}
        metas={metas}
        actions={actions}

    />
        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const User = () => {

    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <UserShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default User;
