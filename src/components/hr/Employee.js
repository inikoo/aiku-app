/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 16:05:50 Malaysia Time, Kuala Lumpur, Malaysia
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

const EMPLOYEE = gql`
    query Employee($employeeSlug: String!) {
        employee(slug: $employeeSlug) {
            id
            slug
            name
            created_at,
            user {
                id
                handle
            }

        }
    }
`;

const UPDATE_EMPLOYEE = gql`
    mutation UpdateUser($id: ID!, $employeeSlug: String!) {
        updateUser(id: $id, slug: $employeeSlug) {
            id
            slug
        }
    }
`;

function EmployeeShowcase(props) {


    let {employeeSlug} = useParams();
    const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);


    const {loading, error, data} = useQuery(EMPLOYEE, {
        variables: {employeeSlug},

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

    console.log(data['employee'])
    switch (data.employee['user'].__typename) {
        case 'Employee':
            metas.push({
                'icon': faIdCardAlt, 'label': <Trans>{data.employee['user'].name} (Employee)</Trans>
            });
            break;
        default:
            //
            break;

    }



    const formStructure = {
        handleCancel: props.cancelEdit,

        handleSubmit: updateEmployee,

        modelID: {name: 'id', value: data['employee'].id},

        inputGroups: [{

            key: 'identification',

            title: <Trans>Personal Information</Trans>,

            note: <Trans></Trans>,

            fields: [

                {
                key: 'slug',

                label: <Trans>Name</Trans>,

                inputComponent: <Input

                    name= 'slug'
                    placeholder={i18nMark('Name')}
                    hint='&nbsp;'
                    value={data['employee'].handle}
                    register={{
                        required: <Trans>This is required.</Trans>, maxLength: {
                            value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                        }
                    }}

                />
            },

                {
                    key: 'slug',

                    label: <Trans>Date of birth</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('DOB')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                },

                {
                    key: 'slug',

                    label: <Trans>National ID</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('National ID')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                },

                {
                    key: 'slug',

                    label: <Trans>Email</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('Email')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                },

                {
                    key: 'slug',

                    label: <Trans>Contact Number</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('Contact Number')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                },

                {
                    key: 'slug',

                    label: <Trans>Address</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('Address')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                },

                {
                    key: 'slug',

                    label: <Trans>Next of kin</Trans>,

                    inputComponent: <Input

                        name= 'slug'
                        placeholder={i18nMark('Next of kin')}
                        hint='&nbsp;'
                        value={data['employee'].handle}
                        register={{
                            required: <Trans>This is required.</Trans>, maxLength: {
                                value: 100, message: <Trans>This input exceed {100} characters.</Trans>
                            }
                        }}

                    />
                }
            ],


        }]
    }





    return (<><HeaderMetaActions
        title={data['employee'].name}
        metas={[]}
        actions={actions}

    />

    {props.editing ? <Form {...formStructure} /> : null}

    </>)
}


const Employee = () => {

    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }

    return (<>

        <EmployeeShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default Employee;