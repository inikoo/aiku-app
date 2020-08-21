/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 17:02:22 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import Form from "../ui/forms/Form";


const SystemSettings = () => {


    const formStructure = {
        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Settings</Trans>,

            fields: [{
                label: <Trans>Name</Trans>
            }]

        }]
    }

    return (<><HeaderMetaActions
        title={<Trans>New settings</Trans>}
        metas={[]}
        actions={[]}

    />
        <Form {...formStructure} />
    </>)
};

export default SystemSettings;