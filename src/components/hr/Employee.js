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
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Alert from "../ui/alerts/Alert";

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


function EmployeeShowcase() {


    const {employeeSlug} = useParams();


    const {loading, error, data} = useQuery(EMPLOYEE, {
        variables: {employeeSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    if (data['employee'] === null) {
        return (<Alert type="error" text={<Trans>{employeeSlug} not found</Trans>}/>)
    }

    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];


    console.log(data['employee'])

    return (<HeaderMetaActions
        title={data['employee'].name}
        metas={[]}
        actions={actions}

    />)

}


const Employee = () => {


    return (<div>

        <EmployeeShowcase/>

    </div>);
};

export default Employee;