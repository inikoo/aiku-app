/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 19 Aug 2020 12:08:22 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Table from "../ui/tables/Table";
import {useQuery, gql} from '@apollo/client';
import {Trans} from '@lingui/macro';

import AvatarCell from "../ui/tables/cells/AvatarCell";
import TwoLineCell from "../ui/tables/cells/TwoLineCell";
import {Link} from "react-router-dom";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {faPlus} from "@fortawesome/pro-solid-svg-icons";
import Alert from "../ui/alerts/Alert";
import {useHistory} from "react-router";



const LOGS = gql`
    query Logs {
        logs(first: 100) {
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


function LogsTable() {

    const {loading, error, data} = useQuery(LOGS);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['logs'];
    const headers = [<Trans>Name</Trans>, 'Payroll ID', 'Position', 'user', ''];


    const logs = res.data.map(obj => {
        return [<Link to={'/system/logs/' + obj.slug}><AvatarCell slug={obj.slug} name={obj.name}/></Link>, <TwoLineCell main={obj.name} secondary={obj.name}/>,

        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No logs found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={logs}/>

}


const Logs = () => {

    const history = useHistory();

    const actions = [{

    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Logs</Trans>}
            metas={[]}
            actions={actions}
        />
        <LogsTable/>

    </div>);
};

export default Logs;