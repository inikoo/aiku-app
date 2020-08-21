/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 13:22:04 Malaysia Time, Kuala Lumpur, Malaysia
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



const EMPLOYEES = gql`
    query Employees {
        employees(first: 100) {
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


function EmployeesTable() {

    const {loading, error, data} = useQuery(EMPLOYEES);
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;

    const res = data['employees'];
    const headers = [<Trans>Name</Trans>, 'Payroll ID', 'Position', 'user', ''];


    const employees = res.data.map(obj => {
        return [<Link to={'/hr/employees/' + obj.slug}><AvatarCell slug={obj.slug} name={obj.name}/></Link>, <TwoLineCell main={obj.name} secondary={obj.name}/>,

        ]
    })

    return <Table ifEmpty={<Alert type='info' text={<Trans>No employees found</Trans>} />} paginatorInfo={res.paginatorInfo} headers={headers} rows={employees}/>

}


const Employees = () => {

    const history = useHistory();

    const actions = [{
        'icon': faPlus,
        'label': <Trans>Employee</Trans>,
        'highlighted': false,
        'handleClick': ()=> {history.push("/hr/employees/new")}

    }];

    return (<div>
        <HeaderMetaActions
            title={<Trans>Employees</Trans>}
            metas={[]}
            actions={actions}
        />
        <EmployeesTable/>

    </div>);
};

export default Employees;