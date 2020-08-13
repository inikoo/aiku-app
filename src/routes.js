/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 12 Aug 2020 20:15:45 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import Dashboard from "./components/Dashboard";

export default [
    { path: "/", name: "Dashboard", Component: Dashboard },
    { path: "/stores", name: "Stores", Component: Stores },
    { path: "/store/:storeID", name: "Store", Component: Store },
    { path: "/store/:storeID/customers", name: "Customers", Component: Customers },
    { path: "/store/:storeID/orders/:customerID", name: "Customer", Component: Customer },


    { path: "/store/:storeID/orders", name: "Customers", Component: Orders },
    { path: "/store/:storeID/orders/:orderID", name: "Customers", Component: Order },

    { path: "/store/:storeID/products", name: "Products", Component: Products },
    { path: "/store/:storeID/product/:storeID", name: "Products", Component: Product },

    { path: "/store/:storeID/website", name: "Website", Component: Website },
    { path: "/store/:storeID/mailroom", name: "Mailroom", Component: Mailroom },



    { path: "/hr", name: "Human resources", Component: HumanResources },
    { path: "/hr/calender", name: "Calendar", Component: HRCalendar },
    { path: "/hr/clocking-machines", name: "ClockingMachines", Component: ClockingMachines },
    { path: "/hr/clocking-machines/:clockingMachineID", name: "ClockingMachine", Component: ClockingMachine },
    { path: "/hr/employees", name: "Employees", Component: Employees },
    { path: "/hr/employee/:employeeID", name: "Employee", Component: Employee },
    { path: "/hr/employee/:employeeID/timesheets", name: "Timesheets", Component: Timesheets },
    { path: "/hr/employee/:employeeID/timesheet/:timesheetID", name: "Timesheet", Component: Timesheet },
    { path: "/hr/contractors", name: "Contractors", Component: Contractors },
    { path: "/hr/contractor/:contractorID", name: "Contractor", Component: Contractor },
    

];