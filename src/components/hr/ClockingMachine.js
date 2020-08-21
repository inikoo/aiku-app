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
        clocking_machine(slug: $clockingMachineSlug) {
            id
            slug
            name
            created_at,
           

        }
    }
`;


function ClockingMachineShowcase() {

    let {clockingMachineSlug} = useParams();



    const {loading, error, data} = useQuery(CLOCKING_MACHINE, {
        variables: {clockingMachineSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;


    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];



    return (<HeaderMetaActions
        title={data['clocking_machine'].name}
        metas={[]}
        actions={actions}

    />)

}


const ClockingMachine = () => {



    return (<>

        <ClockingMachineShowcase />

    </>);
};

export default ClockingMachine;