/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 14 Aug 2020 14:32:39 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {faIdCardAlt, faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
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

const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $handle: String!) {
        updateUser(id: $id, handle: $handle) {
            id
            handle
        }
    }
`;


function UserShowcase(props) {

    let {userHandle} = useParams();
    const [updateUser] = useMutation(UPDATE_USER);


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

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Change Password</Trans>, 'highlighted': false, handleClick: props.openEditViewPassword

        });
    }

    if (!props.editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Change Pin</Trans>, 'highlighted': false, handleClick: props.openEditViewPin

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

        handleCancel: props.cancelEdit,

        handleSubmit: updateUser,

        modelID: {name: 'id', value: data['user'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Credentials</Trans>,

            note: <Trans></Trans>,

            fields: [

                {
                key: 'handle',

                label: <Trans>Username

                </Trans>,

                inputComponent: <Input

                    name='handle'
                    placeholder={i18nMark('username')}
                    hint='&nbsp;'
                    value={data['user'].handle}
                    register={{
                        required: <Trans>This is required.</Trans>, maxLength: {
                            value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                        }
                    }}
                />
            },

            ],


        }]
    }


    const formPasswordStructure = {

        handleCancel: props.cancelEditPassword,

        handleSubmit: updateUser,

        modelID: {name: 'id', value: data['user'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Change Password</Trans>,

            note: <Trans></Trans>,

            fields: [

                {
                    key: 'password',

                    label: <Trans>Password</Trans>,

                    inputComponent: <Input

                        name='password'
                        placeholder={i18nMark('password')}
                        hint='&nbsp;'
                        value={''}
                        register={{
                            required: <Trans>This is required.</Trans>, minLength: {
                                value: 6, message: <Trans>This input requires minimum {6} characters.</Trans>
                            }
                        }}
                    />
                },

            ],


        }]
    }

    const formPinStructure = {

        handleCancel: props.cancelEditPin,

        handleSubmit: updateUser,

        modelID: {name: 'id', value: data['user'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Change Pin</Trans>,

            note: <Trans></Trans>,

            fields: [

                {

                    key: 'pin',

                    label: <Trans>Pin</Trans>,

                    inputComponent: <Input

                        name='pin'
                        placeholder={i18nMark('pin')}
                        hint='&nbsp;'
                        value={''}
                        register={{
                            required: <Trans>This is required.</Trans>, minLength: {
                                value: 4, message: <Trans>This input requires minimum {4} characters.</Trans>
                            }
                        }}
                    />
                }


            ],


        }]
    }





    return (<><HeaderMetaActions
        title={data.user.handle}
        metas={metas}
        actions={actions}

    />
        {props.editing ? <Form {...formStructure} /> : null}
        {props.editingPassword ? <Form {...formPasswordStructure} /> : null}
        {props.editingPin? <Form {...formPinStructure} /> : null}

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

    const [editingPassword, setEditingPassword] = React.useState(false);

    const openEditViewPassword = () => {
        setEditingPassword(true);
    }
    const cancelEditPassword = () => {
        setEditingPassword(false);
    }

    const [editingPin, setEditingPin] = React.useState(false);

    const openEditViewPin = () => {
        setEditingPin(true);
    }
    const cancelEditPin = () => {
        setEditingPin(false);
    }


    return (<>

        <UserShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}

        editingPassword={editingPassword} openEditViewPassword={openEditViewPassword} cancelEditPassword={cancelEditPassword}

                      editingPin={editingPin} openEditViewPin={openEditViewPin} cancelEditPin={cancelEditPin}/>


    </>);
};

export default User;
