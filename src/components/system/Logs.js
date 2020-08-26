/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 19 Aug 2020 12:08:22 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from '@lingui/macro';
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import LogsTable from "./LogsTable";




const Logs = () => {

    return (<div>
        <HeaderMetaActions
            title={<Trans>Logs</Trans>}
            metas={[]}
            actions={[]}
        />
        <LogsTable/>

    </div>);
};

export default Logs;