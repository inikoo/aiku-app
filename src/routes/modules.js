/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 10:43:24 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {faTachometerAlt, faUsers} from "@fortawesome/pro-regular-svg-icons";
import T from "../components/wrappers/T";

const modules = [


    {id: 'dashboard', path: "/", text: <T>Dashboard</T>, icon: faTachometerAlt},

    {
        id: 'customers', path: "/customers", text: <T>Customers</T>, icon: faUsers, subModules: [

            {path: '/customers', text: <T>Customers</T>, icon: faUsers},

            {path: '/customers/lists', text: <T>Lists</T>, icon: faUsers},

            {path: '/customers/insights', text: <T>Insights</T>, icon: faUsers},

            {path: '/prospects', text: <T>Prospects</T>, icon: faUsers},

        ]
    }


];

const subModules = modules.reduce(function (subModules, module) {
    subModules[module.id] = module.subModules;
    return subModules;
}, {});

export {modules, subModules};


