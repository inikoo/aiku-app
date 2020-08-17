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
    faUserSecret, faHandReceiving, faClipboard, faUserHeadset, faUserHardHat, faChessClock, faStopwatch,
    faFileInvoiceDollar, faCreditCard, faPiggyBank, faStar, faAlignLeft, faCog



} from "@fortawesome/pro-regular-svg-icons";
import T from "../components/wrappers/T";

const modules = [


    {id: 'dashboard', path: "/", text: <T>Dashboard</T>, icon: faTachometerAlt},

    {
        id: 'customers', path: "/customers", text: <T>Customers</T>, icon: faUsers, subModules: [

            {path: '/customers', text: <T>Customers</T>, icon: faUsers},

            {path: '/customers/lists', text: <T>Lists</T>, icon: faList},

            {path: '/customers/insights', text: <T>Insights</T>, icon: faGraduationCap},

            {path: '/prospects', text: <T>Prospects</T>, icon: faUserAlien},

        ]
    },


    {
        id: 'mailroom', path: "/mailroom", text: <T>Mailroom</T>, icon: faMailBulk, subModules: [

            {path: '/mailroom', text: <T>Marketing</T>, icon: faBullhorn},

            {path: '/mailroom/notifications', text: <T>Customers notifications</T>, icon: faUsers},

            {path: '/mailroom/staff_notifications', text: <T>Staff notifications</T>, icon: faBell},

                    ]
    },

    {
        id: 'products', path: "/products", text: <T>Products</T>, icon: faStoreAlt, subModules: [

            {path: '/products', text: <T>Dashboard</T>, icon: faTachometerAlt},

            {path: '/products/product', text: <T>Products</T>, icon: faCube},

            {path: '/products/categories', text: <T>Categories</T>, icon: faSitemap},

            {path: '/products/settings', text: <T>Settings</T>, icon: faSlidersH},

        ]
    },

    {
        id: 'offers', path: "/offers", text: <T>Offers</T>, icon: faBadgePercent, subModules: [

            {path: '/offers', text: <T>Categories</T>, icon: faSitemap},

            {path: '/offers/offer', text: <T>Offers</T>, icon: faTags},

        ]
    },

    {
        id: 'websites', path: "/websites", text: <T>Websites</T>, icon: faGlobe, subModules: [

            {path: '/websites', text: <T>Analytics</T>, icon: faAnalytics},

            {path: '/websites/webpages', text: <T>Web pages</T>, icon: faBrowser},

            {path: '/websites/users', text: <T>Users</T>, icon: faUsersClass},

            {path: '/websites/workshop', text: <T>Workshop</T>, icon: faDraftingCompass},

        ]
    },

    {
        id: 'orders', path: "/orders", text: <T>Orders</T>, icon: faShoppingCart, subModules: [

            {path: '/orders', text: <T>Control panel</T>, icon: faStream},

            {path: '/orders/order', text: <T>Orders</T>, icon: faShoppingCart},

        ]
    },

    {
        id: 'delivering', path: "/delivering", text: <T>Delivering</T>, icon: faConveyorBeltAlt, subModules: [

            {path: '/delivering', text: <T>Delivery notes (All)</T>, icon: faTruck},

            {path: '/delivering/pending_delivery_notes', text: <T>Pending deliveries</T>, icon: faStream},

            {path: '/delivering/shippers', text: <T>Shipping companies</T>, icon: faTruckLoading},

        ]
    },

    {
        id: 'warehouse', path: "/warehouse", text: <T>Warehouse</T>, icon: faWarehouseAlt, subModules: [

            {path: '/warehouse', text: <T>Dashboard</T>, icon: faTachometerAlt},

            {path: '/warehouse/warehouse_details', text: <T>Warehouse</T>, icon: faWarehouseAlt},

            {path: '/warehouse/locations', text: <T>Locations</T>, icon: faPallet},

            {path: '/warehouse/production_deliveries', text: <T>Production deliveries</T>, icon: faIndustry},

            {path: '/warehouse/returns', text: <T>Returns</T>, icon: faBackspace},

            {path: '/warehouse/issues', text: <T>Issues</T>, icon: faPoop},

        ]
    },

    {
        id: 'inventory', path: "/inventory", text: <T>Inventory</T>, icon: faBox, subModules: [

            {path: '/inventory', text: <T>Dashboard</T>, icon: faTachometerAlt},

            {path: '/inventory/inventory_parts', text: <T>Inventory (Parts)</T>, icon: faBoxes},

            {path: '/inventory/category', text: <T>Part's families</T>, icon: faSitemap},

            {path: '/inventory/stock_history', text: <T>Stock History</T>, icon: faScanner},

        ]
    },

    {
        id: 'suppliers', path: "/suppliers", text: <T>Suppliers</T>, icon: faHandHoldingBox, subModules: [

            {path: '/suppliers', text: <T>Dashboard</T>, icon: faTachometerAlt},

            {path: '/suppliers/supplier', text: <T>Suppliers</T>, icon: faHandHoldingBox},

            {path: '/suppliers/agents', text: <T>Agents</T>, icon: faUserSecret},

            {path: '/suppliers/products', text: <T>Products</T>, icon: faHandReceiving},

            {path: '/suppliers/orders', text: <T>Purchase orders/Deliveries</T>, icon: faClipboard},

        ]
    },

    {
        id: 'production', path: "/production", text: <T>Production</T>, icon: faIndustry, subModules: [



        ]
    },

    {
        id: 'hr', path: "/hr", text: <T>Human resources</T>, icon: faClipboardUser, subModules: [

            {path: '/hr', text: <T>Employees</T>, icon: faUserHeadset},

            {path: '/hr/contractors', text: <T>Contractors</T>, icon: faUserHardHat},

            {path: '/hr/timesheet', text: <T>Timesheets</T>, icon: faStopwatch},

            {path: '/hr/clocking_machines', text: <T>Clocking-in Machines</T>, icon: faChessClock},

        ]
    },

    {
        id: 'accounting', path: "/accounting", text: <T>Accounting</T>, icon: faAbacus, subModules: [

            {path: '/accounting', text: <T>Invoices (All)</T>, icon: faFileInvoiceDollar},

            {path: '/accounting/payments', text: <T>Payments (All)</T>, icon: faCreditCard},

            {path: '/accounting/credits', text: <T>Credit vault (All)</T>, icon: faPiggyBank},

        ]
    },

    {
        id: 'reports', path: "/reports", text: <T>Reports</T>, icon: faChartLine, subModules: [

        ]
    },

    {
        id: 'users', path: "/system/users", text: <T>Users</T>, icon: faUsersClass, subModules: [

            {path: '/system/users', text: <T> Users (All)</T>, icon: faUsersClass},

            {path: '/system/users/employee', text: <T>Employees</T>, icon: faUserHeadset},

            {path: '/system/users/contractors', text: <T>Contractors</T>, icon: faUserHardHat},

            {path: '/system/users/suppliers', text: <T>Suppliers</T>, icon: faHandHoldingBox},

            {path: '/system/users/agents', text: <T>Agents</T>, icon: faUserSecret},

        ]
    },

    {
        id: 'settings', path: "/settings", text: <T>Settings</T>, icon: faSlidersH, subModules: [

            {path: '/settings', text: <T>Account</T>, icon: faStar},

            {path: '/settings/data_sets', text: <T>Data sets</T>, icon: faAlignLeft},

            {path: '/settings/setting', text: <T>Settings</T>, icon: faCog},

        ]
    },



















];

const subModules = modules.reduce(function (subModules, module) {
    subModules[module.id] = module.subModules;
    return subModules;
}, {});

export {modules, subModules};


