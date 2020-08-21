/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 16:05:50 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useQuery} from "@apollo/client";
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


function EmployeeShowcase(props) {


    let {employeeSlug} = useParams();


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


    switch (data.user['employee'].__typename) {
        case 'Employee':
            metas.push({
                'icon': faIdCardAlt, 'label': <Trans>{data.user['employee'].name} (Employee)</Trans>
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



    console.log(data['employee'])

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