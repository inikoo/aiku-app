import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faIdCardAlt, faKey, faPencilAlt, faTh} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import Tabs from "../navigation/Tabs";
import LogsTable from "../system/LogsTable";


const PROFILE = gql`
    query Me {
        me{
            id
            handle
            status
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
    mutation UpdateUser($id: ID!, $handle: String!, $status: Boolean!) {
        updateUser(id: $id, handle: $handle, status: $status) {
            id
            handle
            status
        }
    }
`;

const UPDATE_MY_PASSWORD = gql`
    mutation UpdateMyPassword( $password: String!) {
        updateMyPassword(password: $password) {
            password
        }
    }
`;

const UPDATE_MY_PIN = gql`
    mutation UpdateMyPin( $pin: String!) {
        updateMyPin(pin: $pin) {
            pin
        }
    }
`;


function Profile() {

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

    const [updateUser] = useMutation(UPDATE_USER);
    const [updateMyPassword] = useMutation(UPDATE_MY_PASSWORD);
    const [updateMyPin] = useMutation(UPDATE_MY_PIN);


    const {loading, error, data} = useQuery(PROFILE);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    const tabs = [

        {permissions: {label: 'Permissions', content: <Trans>Permissions</Trans>}},

        {logs: {label: 'Logs', content: <Trans>Permissions</Trans>}},

        {history: {label: 'History', content: <Trans>History</Trans>}}];


    let metas = [];
    let actions = [];


    if (!editing && !editingPassword && !editingPin) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: openEditView

        });


        actions.push({
            'icon': faKey, 'label': <Trans>Password</Trans>, 'tooltip': 'Change Password', 'highlighted': false, handleClick: openEditViewPassword

        });

        actions.push({
            'icon': faTh, 'label': <Trans>PIN</Trans>, 'tooltip': 'Edit PIN', 'highlighted': false, handleClick: openEditViewPin

        });


    }




    switch (data.me['userable'].__typename) {
        case 'Employee':
            metas.push({
                'icon': faIdCardAlt, 'label': <Trans>{data.me['userable'].name} (Employee)</Trans>
            });
            break;
        default:
            //
            break;

    }

    const formStructure = {

        handleCancel: cancelEdit,

        handleSubmit: updateUser,

        modelID: {name: 'id', value: data['me'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Change ID</Trans>,


            fields: [

                {
                    key: 'password',

                    label: <Trans>ID</Trans>,

                    inputComponent: <Input

                        name='ID'
                        placeholder={i18nMark('ID')}
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

    const formPasswordStructure = {

        handleCancel: cancelEditPassword,

        handleSubmit: updateMyPassword,

        modelID: {name: 'id', value: data['me'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Change Password</Trans>,


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

        handleCancel: cancelEditPin,

        handleSubmit: updateMyPin,

        modelID: {name: 'id', value: data['me'].id},


        inputGroups: [{

            key: 'identification',

            title: <Trans>Change Pin</Trans>,


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
        title={data.me.handle}
        metas={metas}
        actions={actions}

    />
        {editing ? <Form{...formStructure} /> :null}
        {editingPassword ? <Form {...formPasswordStructure} /> : null}
        {editingPin? <Form {...formPinStructure} /> : null}

        <Tabs tabs={tabs}/>

    </>)

}

export default Profile;