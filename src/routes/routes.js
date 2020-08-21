/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Mon, 17 Aug 2020 10:42:19 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */


import Dashboard from "../components/dashboard/Dashboard";
import HumanResources from "../components/hr/HumanResources";
import HRCalendar from "../components/hr/HRCalendar";
import ClockingMachines from "../components/hr/ClockingMachines";
import ClockingMachine from "../components/hr/ClockingMachine";
import Employees from "../components/hr/Employees";
import Employee from "../components/hr/Employee";
import Timesheets from "../components/hr/Timesheets";
import Timesheet from "../components/hr/TimesheetId";
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
import CustomersDashboard from "../components/customers/CustomersDashboard";
import Lists from "../components/customers/lists";
import Insights from "../components/customers/insights";
import Prospects from "../components/customers/prospects";
import MailroomDashboard from "../components/mailroom/MailroomDashboard";
import Marketing from "../components/mailroom/Marketing";
import CustomersNotifications from "../components/mailroom/CustomersNotifications";
import StaffsNotifications from "../components/mailroom/StaffsNotifications";
import ProductsDashboard from "../components/products/ProductsDashboard";
import ProductsList from "../components/products/ProductsList";
import Categories from "../components/products/Categories";
import Settings from "../components/products/Settings";
import OffersDashboard from "../components/offers/OffersDashboard";
import Offers from "../components/offers/Offers";
import OffersCategories from "../components/offers/Categories";
import Cus from "../components/customers/cus";
import WebsitesDashboard from "../components/websites/WebsitesDashboard";
import Analytics from "../components/websites/Analytics";
import WebPages from "../components/websites/WebPages";
import WebsitesUsers from "../components/websites/WebsitesUsers";
import Workshop from "../components/websites/Workshop";
import OrdersDashboard from "../components/orders/OrdersDashboard";
import ControlPanel from "../components/orders/ControlPanel";
import OrdersList from "../components/orders/OrdersList";
import DeliveringDashboard from "../components/delivering/DeliveringDashboard";
import DeliveryNotes from "../components/delivering/DeliveryNotes";
import PendingDeliveryNotes from "../components/delivering/PendingDeliveryNotes";
import Shippers from "../components/delivering/Shippers";
import SuppliersProducts from "../components/suppliers/SuppliersProducts";
import PurchaseOrders from "../components/suppliers/PurchaseOrders";
import Warehouse from "../components/warehouse/Warehouse";
import Locations from "../components/warehouse/Locations";
import ProductionDeliveries from "../components/warehouse/ProductionDeliveries";
import Returns from "../components/warehouse/Returns";
import Issues from "../components/warehouse/Isuues";
import WarehouseDashboard from "../components/warehouse/WarehouseDashboard";
import InventoryDashboard from "../components/inventory/InventoryDashboard";
import InventoryParts from "../components/inventory/InventoryParts";
import PartsFamilies from "../components/inventory/PartsFamilies";
import StockHistory from "../components/inventory/StockHistory";
import NewClockingMachine from "../components/hr/NewClockingMachine";
import NewEmployee from "../components/hr/NewEmployee";
import NewSupplier from "../components/suppliers/NewSupplier";
import NewUser from "../components/system/NewUser";
import NewRoles from "../components/system/NewRole";
import SystemSettings from "../components/system/SystemSettings";


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
    {path: "/mailroom/staff_notifications", breadcrumb: () => <Trans>Staffs Notifications</Trans>, module:'mailroom' ,Component: StaffsNotifications},

//PRODUCTS
    {path: "/products", breadcrumb: () => <Trans>Products dashboard</Trans>, module:'products' ,Component: ProductsDashboard},
    {path: "/products/lists", breadcrumb: () => <Trans>Products List</Trans>, module:'products' ,Component: ProductsList},
    {path: "/products/categories", breadcrumb: () => <Trans>Categories</Trans>, module:'products' ,Component: Categories},
    {path: "/products/settings", breadcrumb: () => <Trans>Settings</Trans>, module:'products' ,Component: Settings},

//OFFERS
    {path: "/offers", breadcrumb: () => <Trans>Offers dashboard</Trans>, module:'offers' ,Component: OffersDashboard},
    {path: "/offers/categories", breadcrumb: () => <Trans>Categories</Trans>, module:'offers' ,Component: OffersCategories},
    {path: "/products/offers", breadcrumb: () => <Trans>Offers</Trans>, module:'offers' ,Component: Offers},

//WEBSITES
    {path: "/websites", breadcrumb: () => <Trans>Websites Dashboard</Trans>, module:'websites' ,Component: WebsitesDashboard},
    {path: "/websites/analytics", breadcrumb: () => <Trans>Analytics</Trans>, module:'websites' ,Component: Analytics},
    {path: "/websites/webpages", breadcrumb: () => <Trans>Web Pages</Trans>, module:'websites' ,Component: WebPages},
    {path: "/websites/users", breadcrumb: () => <Trans>Users</Trans>, module:'websites' ,Component: WebsitesUsers},
    {path: "/websites/workshop", breadcrumb: () => <Trans>Workshop</Trans>, module:'websites' ,Component: Workshop},

//ORDERS
    {path: "/orders", breadcrumb: () => <Trans>Orders Dashboard</Trans>, module:'orders' ,Component: OrdersDashboard},
    {path: "/orders/control_panel", breadcrumb: () => <Trans>Control Panel</Trans>, module:'orders' ,Component: ControlPanel},
    {path: "/orders/orders", breadcrumb: () => <Trans>Orders</Trans>, module:'orders' ,Component: OrdersList},

//DELIVERING
    {path: "/delivering", breadcrumb: () => <Trans>Delivering Dashboard</Trans>, module:'delivering' ,Component: DeliveringDashboard},
    {path: "/delivering/notes", breadcrumb: () => <Trans>Delivery Notes</Trans>, module:'delivering' ,Component: DeliveryNotes},
    {path: "/delivering/pending_delivery_notes", breadcrumb: () => <Trans>Pending Delivery Notes</Trans>, module:'delivering' ,Component: PendingDeliveryNotes},
    {path: "/delivering/shippers", breadcrumb: () => <Trans>Shipping Companies</Trans>, module:'delivering' ,Component: Shippers},

//WAREHOUSE
    {path: "/warehouse", breadcrumb: () => <Trans>Warehouse Dashboard</Trans>, module:'warehouse' ,Component: WarehouseDashboard},
    {path: "/warehouse/warehouse_details",  breadcrumb: () => <Trans>Warehouse</Trans>, module:'warehouse', Component: Warehouse},
    {path: "/warehouse/locations", breadcrumb: () => <Trans>Locations</Trans>, module:'warehouse', Component: Locations},
    {path: "/warehouse/production_deliveries", breadcrumb: () => <Trans>Production Deliveries</Trans>, module:'warehouse', Component: ProductionDeliveries},
    {path: "/warehouse/returns", breadcrumb: () => <Trans>Returns</Trans>, module:'warehouse', Component: Returns},
    {path: "/warehouse/issues", breadcrumb: () => <Trans>Issues</Trans>, module:'warehouse', Component: Issues},

//INVENTORY
    {path: "/inventory", breadcrumb: () => <Trans>Inventory Dashboard</Trans>, module:'inventory' ,Component: InventoryDashboard},
    {path: "/inventory/inventory_parts",  breadcrumb: () => <Trans>Inventory (Parts)</Trans>, module:'inventory', Component: InventoryParts},
    {path: "/inventory/category", breadcrumb: () => <Trans>Part's Families</Trans>, module:'inventory', Component: PartsFamilies},
    {path: "/inventory/stock_history", breadcrumb: () => <Trans>Stock History</Trans>, module:'inventory', Component: StockHistory},

//SUPPLIERS
    // eslint-disable-next-line no-undef
    {path: "/suppliers", breadcrumb: () => <Trans>Suppliers dashboard</Trans>, module:'suppliers' ,Component: SuppliersDashboard},
    {path: "/suppliers/suppliers", breadcrumb: () => <Trans>Suppliers</Trans>, module:'suppliers' ,Component: Suppliers},
    {path: "/suppliers/suppliers/new", breadcrumb: () => <Trans>New Suppliers</Trans>, module:'suppliers' ,Component: NewSupplier },
    {path: "/suppliers/agents", breadcrumb: () => <Trans>Agents</Trans>, module:'suppliers' ,Component: Agents},
    {path: "/suppliers/products", breadcrumb: () => <Trans>Products</Trans>, module:'suppliers' ,Component: SuppliersProducts},
    {path: "/suppliers/orders", breadcrumb: () => <Trans>Purchase Orders/Deliveries</Trans>, module:'suppliers' ,Component: PurchaseOrders},



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





// HR
    {path: "/hr", breadcrumb: () => <Trans>Human resources</Trans>, module:'hr' ,Component: HumanResources},
    {path: "/hr/attendance",  breadcrumb: () => <Trans>Attendance</Trans>, Component: Attendance},
    {path: "/hr/calender", name: "Calendar", Component: HRCalendar},
    {path: "/hr/attendance/clocking-machines",  breadcrumb: () => <Trans>Clocking-machines</Trans>, Component: ClockingMachines},
    {path: "/hr/attendance/clocking-machines/new",breadcrumb: () => <Trans>New clocking-machine</Trans>, Component: NewClockingMachine},

    {path: "/hr/attendance/clocking-machines/:clockingMachineSlug",breadcrumb: () => <Trans>Clocking-machine</Trans>, Component: ClockingMachine},


    {path: "/hr/employees",  breadcrumb: () => <Trans>Employees</Trans>, Component: Employees},
    {path: "/hr/employees/new",breadcrumb: () => <Trans>New employee</Trans>, Component: NewEmployee},
    {path: "/hr/employees/:employeeSlug", breadcrumb: () => <Trans>Employee</Trans>, Component: Employee},


    {path: "/hr/employees/:employeeSlug/timesheets", name: "Timesheets", Component: Timesheets},
    {path: "/hr/employees/:employeeSlug/timesheet/:timesheetID",  Component: Timesheet},



//SYSTEMS
    {path: "/system", breadcrumb: () => <Trans>System</Trans> ,Component: System, module:'system' },
    {path: "/system/users", breadcrumb: () => <Trans>Users</Trans>, Component: Users},
    {path: "/system/users/new", breadcrumb: () => <Trans>New Users</Trans>, Component: NewUser},
    {path: "/system/users/:userHandle", breadcrumb: () => <Trans>User</Trans>, Component: User},
    {path: "/system/roles", breadcrumb: () => <Trans>Roles</Trans>, Component: Roles},
    {path: "/system/roles/new", breadcrumb: () => <Trans>Roles</Trans>, Component: NewRoles},
    {path: "/system/role/:roleID",  breadcrumb: () => <Trans>Role</Trans>, Component: Role},
    {path: "/system/logs",  breadcrumb: () => <Trans>Logs</Trans>, Component: Logs},
    {path: "/system/settings",  breadcrumb: () => <Trans>Settings</Trans>, Component: SystemSettings},


    {path: "/profile", breadcrumb: () => <Trans>Profile</Trans>, Component: Profile},


];

