/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 16:24:13 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from "@lingui/macro";
import {faChessClockAlt} from "@fortawesome/pro-regular-svg-icons";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useHistory} from "react-router";


const Attendance = () => {

    const history = useHistory();
    const actions = [
        {
            'icon': faChessClockAlt,
            'label': <Trans>Clocking-machines</Trans>,
            'highlighted': false,
            'handleClick': ()=> {history.push("/hr/attendance/clocking-machines")}

    }];



    return (<HeaderMetaActions
        title={<Trans>Attendance</Trans>}
        metas={[]}
        actions={actions}

    />)

};

export default Attendance;