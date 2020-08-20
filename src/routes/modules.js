/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 10:43:24 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {
    faAbacus,
    faBadgePercent, faBox, faChartLine, faClipboardUser, faConveyorBeltAlt,
    faGlobe, faHandHoldingBox, faIndustry,
    faMailBulk, faShoppingCart, faSlidersH,
    faStoreAlt,
    faTachometerAlt,
    faUsers, faUsersClass, faWarehouseAlt, faList, faGraduationCap, faUserAlien,
    faBullhorn, faBell, faCube, faSitemap, faTags, faAnalytics, faBrowser, faDraftingCompass,
    faStream, faTruck, faTruckLoading, faPallet, faBackspace, faPoop, faBoxes, faScanner,
    faUserSecret, faHandReceiving, faClipboard, faUserHardHat, faStopwatch,
    faFileInvoiceDollar, faCreditCard, faPiggyBank, faStar



} from "@fortawesome/pro-regular-svg-icons";
import { Trans } from '@lingui/macro';

const modules = [


    {id: 'dashboard', path: "/", text: <Trans>Dashboard</Trans>, icon: faTachometerAlt},

    {
        id: 'customers', path: "/customers", text: <Trans>Customers</Trans>, icon: faUsers, subModules: [

            {path: '/customers', text: <Trans>CRM</Trans>, icon: faUsers},

            {path: '/customers/customer', text: <Trans>Customers</Trans>, icon: faList},

            {path: '/customers/lists', text: <Trans>List</Trans>, icon: faList},

            {path: '/customers/insights', text: <Trans>Insights</Trans>, icon: faGraduationCap},

            {path: '/customers/prospects', text: <Trans>Prospects</Trans>, icon: faUserAlien},

        ]
    },


    {
        id: 'mailroom', path: "/mailroom", text: <Trans>Mailroom</Trans>, icon: faMailBulk, subModules: [

            {path: '/mailroom', text: <Trans>Mailroom Dashboard</Trans>, icon: faBullhorn},

            {path: '/mailroom/marketing', text: <Trans>Marketing</Trans>, icon: faBullhorn},

            {path: '/mailroom/customers_notifications', text: <Trans>Customers notifications</Trans>, icon: faUsers},

            {path: '/mailroom/staff_notifications', text: <Trans>Staffs notifications</Trans>, icon: faBell},

                    ]
    },

    {
        id: 'products', path: "/products", text: <Trans>Products</Trans>, icon: faStoreAlt, subModules: [

            {path: '/products', text: <Trans>Products Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/products/list', text: <Trans>Products List</Trans>, icon: faCube},

            {path: '/products/categories', text: <Trans>Categories</Trans>, icon: faSitemap},

            {path: '/products/settings', text: <Trans>Settings</Trans>, icon: faSlidersH},

        ]
    },

    {
        id: 'offers', path: "/offers", text: <Trans>Offers</Trans>, icon: faBadgePercent, subModules: [

            {path: '/offers', text: <Trans>Offers Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/offers/categories', text: <Trans>Categories</Trans>, icon: faSitemap},

            {path: '/offers/offer', text: <Trans>Offers</Trans>, icon: faTags},

        ]
    },

    {
        id: 'websites', path: "/websites", text: <Trans>Websites</Trans>, icon: faGlobe, subModules: [

            {path: '/websites', text: <Trans>Websites Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/websites/analytics', text: <Trans>Analytics</Trans>, icon: faAnalytics},

            {path: '/websites/webpages', text: <Trans>Web pages</Trans>, icon: faBrowser},

            {path: '/websites/users', text: <Trans>Users</Trans>, icon: faUsersClass},

            {path: '/websites/workshop', text: <Trans>Workshop</Trans>, icon: faDraftingCompass},

        ]
    },

    {
        id: 'orders', path: "/orders", text: <Trans>Orders</Trans>, icon: faShoppingCart, subModules: [

            {path: '/orders', text: <Trans>Orders Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/orders/control_panel', text: <Trans>Control panel</Trans>, icon: faStream},

            {path: '/orders/orders', text: <Trans>Orders</Trans>, icon: faShoppingCart},

        ]
    },

    {
        id: 'delivering', path: "/delivering", text: <Trans>Delivering</Trans>, icon: faConveyorBeltAlt, subModules: [

            {path: '/delivering', text: <Trans>Delivering Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/delivering/notes', text: <Trans>Delivery notes (All)</Trans>, icon: faTruck},

            {path: '/delivering/pending_delivery_notes', text: <Trans>Pending deliveries</Trans>, icon: faStream},

            {path: '/delivering/shippers', text: <Trans>Shipping companies</Trans>, icon: faTruckLoading},

        ]
    },

    {
        id: 'warehouse', path: "/warehouse", text: <Trans>Warehouse</Trans>, icon: faWarehouseAlt, subModules: [

            {path: '/warehouse', text: <Trans>Warehouse Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/warehouse/warehouse_details', text: <Trans>Warehouse</Trans>, icon: faWarehouseAlt},

            {path: '/warehouse/locations', text: <Trans>Locations</Trans>, icon: faPallet},

            {path: '/warehouse/production_deliveries', text: <Trans>Production Deliveries</Trans>, icon: faIndustry},

            {path: '/warehouse/returns', text: <Trans>Returns</Trans>, icon: faBackspace},

            {path: '/warehouse/issues', text: <Trans>Issues</Trans>, icon: faPoop},

        ]
    },

    {
        id: 'inventory', path: "/inventory", text: <Trans>Inventory</Trans>, icon: faBox, subModules: [

            {path: '/inventory', text: <Trans>Inventory Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/inventory/inventory_parts', text: <Trans>Inventory (Parts)</Trans>, icon: faBoxes},

            {path: '/inventory/category', text: <Trans>Part's families</Trans>, icon: faSitemap},

            {path: '/inventory/stock_history', text: <Trans>Stock History</Trans>, icon: faScanner},

        ]
    },

    {
        id: 'suppliers', path: "/suppliers", text: <Trans>Suppliers</Trans>, icon: faHandHoldingBox, subModules: [

            {path: '/suppliers', text: <Trans>Suppliers Dashboard</Trans>, icon: faTachometerAlt},

            {path: '/suppliers/suppliers', text: <Trans>Suppliers</Trans>, icon: faHandHoldingBox},

            {path: '/suppliers/agents', text: <Trans>Agents</Trans>, icon: faUserSecret},

            {path: '/suppliers/products', text: <Trans>Products</Trans>, icon: faHandReceiving},

            {path: '/suppliers/orders', text: <Trans>Purchase orders/Deliveries</Trans>, icon: faClipboard},

        ]
    },

    {
        id: 'production', path: "/production", text: <Trans>Production</Trans>, icon: faIndustry, subModules: [



        ]
    },

    {
        id: 'hr', path: "/hr", text: <Trans>Human resources</Trans>, icon: faClipboardUser, subModules: [

            {path: '/hr', text: <Trans>Human resources</Trans>, icon: faTachometerAlt},

            {path: '/hr/employees', text: <Trans>Employees</Trans>, icon: faUserHardHat},

            {path: '/hr/attendance', text: <Trans>Attendance</Trans>, icon: faStopwatch},


        ]
    },

    {
        id: 'accounting', path: "/accounting", text: <Trans>Accounting</Trans>, icon: faAbacus, subModules: [

            {path: '/accounting', text: <Trans>Invoices (All)</Trans>, icon: faFileInvoiceDollar},

            {path: '/accounting/payments', text: <Trans>Payments (All)</Trans>, icon: faCreditCard},

            {path: '/accounting/credits', text: <Trans>Credit vault (All)</Trans>, icon: faPiggyBank},

        ]
    },

    {
        id: 'reports', path: "/reports", text: <Trans>Reports</Trans>, icon: faChartLine, subModules: [

        ]
    },

    {
        id: 'system', path: "/system", text: <Trans>System</Trans>, icon: faUsersClass, subModules: [

            {path: '/system', text: <Trans>System</Trans>, icon: faUsersClass},

            {path: '/system/users', text: <Trans>Users</Trans>, icon: faUsersClass},

            {path: '/system/roles', text: <Trans>Roles</Trans>, icon: faUsersClass},

            {path: '/system/logs', text: <Trans>Logs</Trans>, icon: faUsersClass},

            {path: '/system/settings', text: <Trans>Settings</Trans>, icon: faStar},



        ]
    }



















];

const subModules = modules.reduce(function (subModules, module) {
    subModules[module.id] = module.subModules;
    return subModules;
}, {});

export {modules, subModules};


