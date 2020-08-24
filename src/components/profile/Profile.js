import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faIdCardAlt, faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";


const PROFILE = gql`
    query Me {
        me {
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


function ProfileShowcase(props) {

    const [updateMyPassword] = useMutation(UPDATE_MY_PASSWORD);
    const [updateMyPin] = useMutation(UPDATE_MY_PIN);


    const {loading, error, data} = useQuery(PROFILE);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    let metas = [];
    let actions = [];


    if (!props.editingPassword  &&  !props.editingPin ) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit Password</Trans>, 'highlighted': false, handleClick: props.openEditViewPassword

        });

        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit Pin</Trans>, 'highlighted': false, handleClick: props.openEditViewPin

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


    const formPasswordStructure = {

        handleCancel: props.cancelEditPassword,

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

        handleCancel: props.cancelEditPin,

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
        {props.editingPassword ? <Form {...formPasswordStructure} /> : null}
        {props.editingPin? <Form {...formPinStructure} /> : null}

    </>)

}

    const Profile = () => {


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

            <ProfileShowcase editingPassword={editingPassword} openEditViewPassword={openEditViewPassword} cancelEditPassword={cancelEditPassword}

                          editingPin={editingPin} openEditViewPin={openEditViewPin} cancelEditPin={cancelEditPin}/>


        </>);



};

export default Profile;