/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 14 Aug 2020 14:35:10 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Alert from "../ui/alerts/Alert";

const ROLE = gql`
    query Role($roleSlug: String!) {
        role(slug: $roleSlug) {
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


function RoleShowcase(props) {

    const roleSlug = props.roleSlug;

    const {loading, error, data} = useQuery(ROLE, {
        variables: {roleSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;



    if(data['role']===null){
        return (<Alert type="error" text={<Trans >{roleSlug} not found</Trans>} />)
    }

    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];


    console.log(data['role'])

    return (<HeaderMetaActions
        title={data['role'].name}
        metas={[]}
        actions={actions}

    />)

}


const Role = () => {

    let {roleSlug} = useParams();


    return (<div>

        <RoleShowcase employeeSlug={roleSlug}/>

    </div>);
};

export default Role;