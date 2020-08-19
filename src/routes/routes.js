/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 10:42:19 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */


import Dashboard from "../components/dashboard/Dashboard";
import HumanResources from "../components/hr/HumanResources";
import HRCalendar from "../components/hr/HRCalendar";
import ClockingMachines from "../components/hr/ClockingMachines";
import ClockingMachine from "../components/hr/ClockingMachineID";
import Employees from "../components/hr/Employees";
import Employee from "../components/hr/EmployeeId";
import Timesheets from "../components/hr/Timesheets";
import Timesheet from "../components/hr/TimesheetId";
import Contractors from "../components/hr/Contractors";
import Contractor from "../components/hr/ContractorId";
import Stores from "../components/store/Stores";
import Store from "../components/store/StoreId";
import Customers from "../components/store/Customers";
import Orders from "../components/store/Orders";
import Order from "../components/store/OrderId";
import Products from "../components/store/Products";
import Product from "../components/store/ProductId";
import Website from "../components/store/Website";
import Mailroom from "../components/store/Mailroom";
import Profile from "../components/profile/Profile";
import Users from "../components/system/Users";
import User from "../components/system/User";
import Roles from "../components/system/Roles";
import Role from "../components/system/Role";
import System from "../components/system/System";
import Logs from "../components/system/Logs";
import {Trans} from '@lingui/macro';
import React from "react";
import Attendance from "../components/hr/Attendance";
import Suppliers from "../components/suppliers/suppliers";
import Agents from "../components/suppliers/agents";
import SuppliersDashboard from "../components/suppliers/supplierDashboard";
import CustomersDashboard from "../components/Customers/CustomersDashboard";
import Lists from "../components/Customers/lists";
import Insights from "../components/Customers/insights";
import Prospects from "../components/Customers/prospects";
import MailroomDashboard from "../components/mailroom/MailroomDashboard";
import Marketing from "../components/mailroom/Marketing";
import CustomersNotifications from "../components/mailroom/CustomersNotifications";
import StaffsNotifications from "../components/mailroom/StaffsNotifications";
import ProductsDashboard from "../components/Products/ProductsDashboard";
import ProductsList from "../components/Products/ProductsList";
import Categories from "../components/Products/Categories";
import Settings from "../components/Products/Settings";
import OffersDashboard from "../components/Offers/OffersDashboard";
import Offers from "../components/Offers/Offers";
import OffersCategories from "../components/Offers/Categories";
import Cus from "../components/Customers/cus";


export default [

    {path: "/", breadcrumb: () => <Trans>Home</Trans>, name: "Dashboard", Component: Dashboard},


// CUSTOMERS
    {path: "/customers", breadcrumb: () => <Trans>CRM</Trans>, module:'customers' ,Component: CustomersDashboard},
    {path: "/customers/customer", breadcrumb: () => <Trans>Customers</Trans>, module:'customers' ,Component: Cus},
    {path: "/customers/lists", breadcrumb: () => <Trans>Lists</Trans>, module:'customers' ,Component: Lists},
    {path: "/customers/insights", breadcrumb: () => <Trans>Insights</Trans>, module:'customers' ,Component: Insights},
    {path: "/customers/prospects", breadcrumb: () => <Trans>Prospects</Trans>, module:'customers' ,Component: Prospects},

//MAILROOM
    {path: "/mailroom", breadcrumb: () => <Trans>Mailroom dashboard</Trans>, module:'mailroom' ,Component: MailroomDashboard},
    {path: "/mailroom/marketing", breadcrumb: () => <Trans>Marketing</Trans>, module:'mailroom' ,Component: Marketing},
    {path: "/mailroom/customers_notifications", breadcrumb: () => <Trans>Customers Notifications</Trans>, module:'mailroom' ,Component: CustomersNotifications},
    {path: "/mailroom/staff_notofications", breadcrumb: () => <Trans>Staffs Notifications</Trans>, module:'mailroom' ,Component: StaffsNotifications},

//PRODUCTS
    {path: "/products", breadcrumb: () => <Trans>Products dashboard</Trans>, module:'products' ,Component: ProductsDashboard},
    {path: "/products/productslist", breadcrumb: () => <Trans>Products List</Trans>, module:'products' ,Component: ProductsList},
    {path: "/products/categories", breadcrumb: () => <Trans>Categories</Trans>, module:'products' ,Component: Categories},
    {path: "/products/settings", breadcrumb: () => <Trans>Settings</Trans>, module:'products' ,Component: Settings},

//OFFERS
    {path: "/offers", breadcrumb: () => <Trans>Offers dashboard</Trans>, module:'offers' ,Component: OffersDashboard},
    {path: "/offers/categories", breadcrumb: () => <Trans>Categories</Trans>, module:'offers' ,Component: OffersCategories},
    {path: "/products/offers", breadcrumb: () => <Trans>Offers</Trans>, module:'offers' ,Component: Offers},








//STORES
    {path: "/stores", name: "Stores", Component: Stores, module: 'stores'},
    {path: "/store/:storeID", name: "Store", Component: Store},
    {path: "/store/:storeID/customers", name: "Customers", Component: Customers},
    {path: "/store/:storeID/orders/:customerID", name: "Customer", Component: Customers},
    {path: "/store/:storeID/orders", name: "Customers", Component: Orders},
    {path: "/store/:storeID/orders/:orderID", name: "Customers", Component: Order},
    {path: "/store/:storeID/products", name: "Products", Component: Products},
    {path: "/store/:storeID/product/:storeID", name: "Products", Component: Product},
    {path: "/store/:storeID/website", name: "Website", Component: Website},
    {path: "/store/:storeID/mailroom", name: "Mailroom", Component: Mailroom},


//SUPPLIERS
    // eslint-disable-next-line no-undef
    {path: "/suppliers", breadcrumb: () => <Trans>Suppliers dashboard</Trans>, module:'suppliers' ,Component: SuppliersDashboard},
    {path: "/suppliers/suppliers", breadcrumb: () => <Trans>Suppliers</Trans>, module:'suppliers' ,Component: Suppliers},
    {path: "/suppliers/agents", breadcrumb: () => <Trans>Agents</Trans>, module:'suppliers' ,Component: Agents},


// HR
    {path: "/hr", breadcrumb: () => <Trans>Human resources</Trans>, module:'hr' ,Component: HumanResources},
    {path: "/hr/attendance",  breadcrumb: () => <Trans>Attendance</Trans>, Component: Attendance},
    {path: "/hr/calender", name: "Calendar", Component: HRCalendar},
    {path: "/hr/clocking-machines", name: "ClockingMachines", Component: ClockingMachines},
    {path: "/hr/clocking-machines/:clockingMachineID", name: "ClockingMachine", Component: ClockingMachine},
    {path: "/hr/employees", name: "Employees", Component: Employees},
    {path: "/hr/employee/:employeeID", name: "Employee", Component: Employee},
    {path: "/hr/employee/:employeeID/timesheets", name: "Timesheets", Component: Timesheets},
    {path: "/hr/employee/:employeeID/timesheet/:timesheetID",  Component: Timesheet},
    {path: "/hr/contractors", name: "Contractors", Component: Contractors},
    {path: "/hr/contractor/:contractorID", name: "Contractor", Component: Contractor},



//SYSTEMS
    {path: "/system", breadcrumb: () => <Trans>System</Trans> ,Component: System, module:'system' },
    {path: "/system/users", breadcrumb: () => <Trans>Users</Trans>, Component: Users},
    {path: "/system/users/:userHandle", breadcrumb: () => <Trans>User</Trans>, Component: User},
    {path: "/system/roles", breadcrumb: () => <Trans>Roles</Trans>, Component: Roles},
    {path: "/system/role/:roleID",  breadcrumb: () => <Trans>Role</Trans>, Component: Role},
    {path: "/system/logs",  breadcrumb: () => <Trans>Logs</Trans>, Component: Logs},


    {path: "/profile", breadcrumb: () => <Trans>Profile</Trans>, Component: Profile},


];

