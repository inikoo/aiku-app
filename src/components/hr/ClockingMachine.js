/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 17:50:22 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */


import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'

const CLOCKING_MACHINE = gql`
    query ClockingMachine($clockingMachineSlug: String!) {
        employee(slug: $clockingMachineSlug) {
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


function ClockingMachineShowcase(props) {

    const $clockingMachineSlug = props.$clockingMachineSlug;

    const {loading, error, data} = useQuery(CLOCKING_MACHINE, {
        variables: {$clockingMachineSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];


    console.log(data['employee'].name)

    return (<HeaderMetaActions
        title={data['employee'].name}
        metas={[]}
        actions={actions}

    />)

}


const ClockingMachine = () => {

    let {employeeSlug} = useParams();


    return (<div>

        <ClockingMachineShowcase employeeSlug={employeeSlug}/>

    </div>);
};

export default ClockingMachine;