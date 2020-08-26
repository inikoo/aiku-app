/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 26 Aug 2020 14:07:35 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Table from "../ui/tables/Table";
import {useQuery, gql} from '@apollo/client';
import {Trans} from '@lingui/macro';
import Alert from "../ui/alerts/Alert";
import Cell from "../ui/tables/cells/Cell";



const USER_AUTH_LOGS = gql`



    
    query Logs($parent:UserAuthLogsWhereColumn, $userID: Mixed) {
        user_auth_logs(where: {column: $parent, operator: EQ, value: $userID},first: 100) {
            paginatorInfo {
                total
                currentPage
                lastPage
            }
            data {
                time
                handle
                action
                ip

            }
        }
    }
`;



function LogsTable(props) {


        const {loading, error, data} = useQuery(USER_AUTH_LOGS,{
            variables:(
                {
                    parent:props.lookupColumn,
                    userID:props.userID
                }
                )
        });



    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['user_auth_logs'];
    const headers = [<Trans>Time</Trans>, <Trans>Action</Trans>, 'IP', ''];

    const logs = res.data.map(obj => {
        return [
            <Cell content={obj.time}/>,<Cell content={obj.action}/>,<Cell content={obj.ip}/>
        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No logs found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={logs}/>

}



export default LogsTable;