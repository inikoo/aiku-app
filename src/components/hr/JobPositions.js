/*
 Author: Kohani (kohani@aiku.io)
 Created: Tue, 25 Aug 2020 14:50:33 Singapore Standard Time, Kuala Lumpur, Malaysia
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


const JOB_POSITIONS = gql`
    query JobPositions {
        job_positions(first: 100) {
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


function JobPositionsTable() {

    const {loading, error, data} = useQuery(JOB_POSITIONS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['job_positions'];
    const headers = [<Trans>Name</Trans>];

    const jobPositions = res.data.map(obj => {
        return [<Link to={'/hr/jobPositions/' + obj.slug}>{obj.name}</Link>,

        ]
    })



    return <Table ifEmpty={<Alert type='info' text={<Trans>No area found</Trans>} />}  paginatorInfo={res.paginatorInfo} headers={headers} rows={jobPositions}/>

}


const JobPositions = () => {

    const history = useHistory();


    const actions = [{
        'icon': faPlus,
        'label': <Trans>Job Position</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/hr/jobPositions/new")}
    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Job Positions</Trans>}
            metas={[]}
            actions={actions}
        />
        <JobPositionsTable/>

    </div>);
};

export default JobPositions;

