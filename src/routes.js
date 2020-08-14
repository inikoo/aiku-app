/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 12 Aug 2020 20:15:45 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import Dashboard from "./components/dashboard/Dashboard";
import HumanResources from "./components/hr/HumanResources";
import HRCalendar from "./components/hr/HRCalendar";
import ClockingMachines from "./components/hr/ClockingMachines";
import ClockingMachine from "./components/hr/ClockingMachineID";
import Employees from "./components/hr/Employees";
import Employee from "./components/hr/EmployeeId";
import Timesheets from "./components/hr/Timesheets";
import Timesheet from "./components/hr/TimesheetId";
import Contractors from "./components/hr/Contractors";
import Contractor from "./components/hr/ContractorId";
import Stores from "./components/store/Stores";
import Store from "./components/store/StoreId";
import Customers from "./components/store/Customers";
import Customer from "./components/store/CustomerId";
import Orders from "./components/store/Orders";
import Order from "./components/store/OrderId";
import Products from "./components/store/Products";
import Product from "./components/store/ProductId";
import Website from "./components/store/Website";
import Mailroom from "./components/store/Mailroom";
import Profile from "./components/profile/Profile";
import Users from "./components/system/Users";
import User from "./components/system/UserId";
import Roles from "./components/system/Roles";
import Role from "./components/system/Role";

export default [{path: "/", name: "Dashboard", Component: Dashboard},

    {path: "/stores", name: "Stores", Component: Stores}, {path: "/store/:storeID", name: "Store", Component: Store},

    {path: "/store/:storeID/customers", name: "Customers", Component: Customers},

    {path: "/store/:storeID/orders/:customerID", name: "Customer", Component: Customer},

    {path: "/store/:storeID/orders", name: "Customers", Component: Orders}, {path: "/store/:storeID/orders/:orderID", name: "Customers", Component: Order},

    {path: "/store/:storeID/products", name: "Products", Component: Products}, {path: "/store/:storeID/product/:storeID", name: "Products", Component: Product},

    {path: "/store/:storeID/website", name: "Website", Component: Website}, {path: "/store/:storeID/mailroom", name: "Mailroom", Component: Mailroom},

    {path: "/hr", name: "Human resources", Component: HumanResources}, {path: "/hr/calender", name: "Calendar", Component: HRCalendar},

    {path: "/hr/clocking-machines", name: "ClockingMachines", Component: ClockingMachines},

    {path: "/hr/clocking-machines/:clockingMachineID", name: "ClockingMachine", Component: ClockingMachine},

    {path: "/hr/employees", name: "Employees", Component: Employees},

    {path: "/hr/employee/:employeeID", name: "Employee", Component: Employee},

    {path: "/hr/employee/:employeeID/timesheets", name: "Timesheets", Component: Timesheets},

    {path: "/hr/employee/:employeeID/timesheet/:timesheetID", name: "Timesheet", Component: Timesheet},

    {path: "/hr/contractors", name: "Contractors", Component: Contractors}, {path: "/hr/contractor/:contractorID", name: "Contractor", Component: Contractor},

    {path: "/system/users", name: "Users", Component: Users},
    {path: "/system/users", name: "Users", Component: Users},
    {path: "/system/user/:userID", name: "User", Component: User},
    {path: "/system/roles", name: "Roles", Component: Roles},
    {path: "/system/role/:userID", name: "User", Component: Role},


    {path: "/profile", name: "Profile", Component: Profile},


];

