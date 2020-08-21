/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 18:06:42 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Table from "../ui/tables/Table";
import {useQuery, gql} from '@apollo/client';
import {Trans} from '@lingui/macro';

import {Link} from "react-router-dom";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPlus} from "@fortawesome/pro-solid-svg-icons";
import Alert from "../ui/alerts/Alert";
import {useHistory} from "react-router";


const CLOCKING_MACHINES = gql`
    query ClockingMachines {
        clocking_machines(first: 100) {
            paginatorInfo {
                total
                currentPage
                lastPage
            }
            data {
                id
                slug
                name
                created_at

            }
        }
    }
`;


function ClockingMachinesTable() {

    const {loading, error, data} = useQuery(CLOCKING_MACHINES);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['clocking_machines'];
    const headers = [<Trans>Name</Trans>];

    const clockingMachines = res.data.map(obj => {
        return [<Link to={'/hr/attendance/clocking-machines/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No clocking machines found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={clockingMachines}/>

}


const ClockingMachines = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Clocking Machine</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/hr/attendance/clocking-machines/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Clocking Machines</Trans>}
            metas={[]}
            actions={actions}
        />
        <ClockingMachinesTable/>

    </div>);
};

export default ClockingMachines;

