/*
 Author: Kohani (kohani@aiku.io)
 Created: Mon, 14 Sep 2020 14:24:23 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faIdCardAlt, faPencilAlt, faKey, faTh} from '@fortawesome/pro-solid-svg-icons'
import Input from "../ui/forms/fields/Input";
import {i18nMark} from "@lingui/react";
import Form from "../ui/forms/Form";
import Tabs from "../navigation/Tabs";
import {useHistory, useParams} from "react-router";
import Alert from "../ui/alerts/Alert";

const CREDIT_VAULT = gql`
    query Credit_vault($credit_vaultSlug: String!) {
        credit_vault(slug: $credit_vaultSlug) {
            id
            slug
            name
            created_at,


        }
    }
`;
const UPDATE_CREDIT_VAULT = gql`
    mutation UpdateCredit_Vault($id: ID!, $name: String!) {
        updateCredit_vault(id: $id, name: $name) {
            id
            name
        }
    }
`;

function Credit_Vault() {

    let history = useHistory();


    const [editing, setEditing] = React.useState(false);

    const openEditView = () => {
        setEditing(true);
    }
    const cancelEdit = () => {
        setEditing(false);
    }

    let {userHandle} = useParams();
    const [updateCredit_vault] = useMutation(UPDATE_CREDIT_VAULT, {
        onCompleted(data) {


            if (history.location.pathname !== '/accounting/credits/' + data['updateCredit_vault'].handle) {
                history.replace('/accounting/credits/' + data['updateCredit_vault'].handle)

            }


        }
    });


    const {loading, error, data} = useQuery(CREDIT_VAULT, {
        variables: {userHandle},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    if(data['credit_vault']===null){
        return <Alert type='error' text={<Trans>Not found</Trans>} />
    }


    const tabs = [

        {store: {label: 'Stores', content: <Trans>Credits per store</Trans>}},

        {credits: {label: 'Credits', content: <Trans>Credits</Trans>}}];


    let metas = [];
    let actions = [];


    if (!editing) {
        actions.push({
            'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false, handleClick: openEditView
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

    const postProcess = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            if (key === 'status') {
                obj[key] = (value === 'true');
            }
        }
        return obj
    }

    const formStructure = {

        postProcess: postProcess,

        handleCancel: cancelEdit,

        handleSubmit: updateCredit_vault,

        modelID: {name: 'id', value: data['credit_vault'].id},


        inputGroups: [{

            key: 'identification',

            fields: [

                {
                    key: 'handle',

                    label: <Trans>Credit Id

                    </Trans>,

                    inputComponent: <Input

                        name='handle'
                        placeholder={i18nMark('credit id')}
                        hint='&nbsp;'
                        value={data['credit_vault'].handle}
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

    return (<><HeaderMetaActions
        title={data['credit_vault'].name}
        metas={metas}
        actions={actions}

    />
        {editing ? <Form {...formStructure} /> : null}
        <Tabs tabs={tabs}/>

    </>)

}


export default Credit_Vault;