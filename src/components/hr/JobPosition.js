/*
 Author: Kohani (kohani@aiku.io)
 Created: Wed, 26 Aug 2020 11:53:14 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import {useHistory, useParams} from "react-router";
import {faChessClockAlt} from "@fortawesome/pro-regular-svg-icons";

const JOB_POSITION = gql`
    query JobPosition($jobPositionSlug: String!) {
        job_position(slug: $jobPositionSlug) {
            id
            slug
            name
            created_at,
        }
    }
`;
const UPDATE_JOB_POSITION = gql`
    mutation UpdateJobPosition($id: ID!, $name: String!) {
        updateJobPosition(id: $id, name: $name) {
            id
            name
        }
    }
`;

function JobPositionShowcase(props) {

    const history = useHistory();
    let {jobPositionSlug} = useParams();
    const [updateJobPosition] = useMutation(UPDATE_JOB_POSITION);


    const {loading, error, data} = useQuery(JOB_POSITION, {
        variables: {jobPositionSlug},

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

        handleSubmit: updateJobPosition,

        modelID: {name: 'id', value: data['job_position'].id},

        inputGroups: [{
            key: 'identification',

            title: <Trans>Identification</Trans>,

            note: <Trans>Give your job position a identification name</Trans>,

            fields: [{
                key: 'name',

                label: <Trans>Name</Trans>,

                inputComponent: <Input
                    name='name'
                    help={<Trans>Used to identify the area</Trans>}
                    placeholder={i18nMark('position')}
                    hint='&nbsp;'
                    value={data['job_position'].name}
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
        title={data['job_position'].name}
        metas={[]}
        actions={actions}

    />

        {props.editing ? <Form {...formStructure} /> : null}

    </>)

}


const JobPosition = () => {


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }


    return (<>

        <JobPositionShowcase editing={editing} openEditView={openEditView} cancelEdit={cancelEdit}/>

    </>);
};

export default JobPosition;
