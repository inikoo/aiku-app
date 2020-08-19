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

    const userHandle = props.userHandle;

    const {loading, error, data} = useQuery(USER, {
        variables: {userHandle},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    let metas = [];
    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];

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


    return (<HeaderMetaActions
        title={data.user.handle}
        metas={metas}
        actions={actions}

    />)

}


const User = () => {

    let {userHandle} = useParams();

    console.log(userHandle)

    return (<div>

            <UserShowcase userHandle={userHandle}/>

        </div>);
};

export default User;