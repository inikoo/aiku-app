/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Thu, 20 Aug 2020 22:01:50 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import Form from "../ui/forms/Form";


const NewClockingMachine = () => {


    const formStructure = {
        inputGroups: [{
            title: <Trans>Identification</Trans>,

            note: <Trans>Give your new clocking machine a identification name</Trans>,

            fields: [{
                label: <Trans>Name</Trans>
            }]

        }]
    }

    return (<><HeaderMetaActions
            title={<Trans>New clocking-machine</Trans>}
            metas={[]}
            actions={[]}

        />
            <Form {...formStructure} />
            </>)
};

export default NewClockingMachine;