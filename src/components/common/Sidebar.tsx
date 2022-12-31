import { Link } from "react-router-dom";
import url from "@/config/url";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
interface SidebarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar({
  isOpen,
  toggleDrawer,
  setIsOpen,
}: SidebarProps) {
  return (
    <>
      <Drawer
        open={isOpen}
        enableOverlay={false}
        onClose={toggleDrawer}
        direction="left"
        className="overflow-y-auto sidebarDrawer"
      >
        {" "}
        <div
          id="sideBar"
          className="relative flex flex-col flex-wrap bg-white dark:bg-gray-900
       
        p-6
         flex-none w-64 shadow-xl
          animated faster"
        >
          <div className="flex flex-col">
            <div className="text-right  mb-4">
              <button
                className="active:outline-none focus:outline-none dark:text-white"
                id="sideBarHideBtn"
                onClick={() => setIsOpen(false)}
              >
                <i className="fad fa-times-circle text-3xl"></i>
              </button>
            </div>

            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 tracking-wider">
              homes
            </p>

            <Link
              to={url.protected.dashboard.analytics}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2"></i>
              Analytics
            </Link>

            <Link
              to={url.protected.dashboard.ecommerce}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-shopping-cart text-xs mr-2"></i>
              ecommerce
            </Link>

            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Product
            </p>

            <Link
              to={url.protected.add.product}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-envelope-open-text text-xs mr-2"></i>
              Add Product
            </Link>

            <Link
              to={url.protected.all.product}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-comments text-xs mr-2"></i>
              All Product
            </Link>
            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Main Category
            </p>
            <Link
              to={url.protected.add.mainCategory}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-shield-check text-xs mr-2"></i>
              Add Main Category
            </Link>

            <Link
              to={url.protected.all.mainCategory}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-calendar-edit text-xs mr-2"></i>
              All Main Category
            </Link>
            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Category
            </p>

            <Link
              to={url.protected.add.category}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
              Add Category
            </Link>

            <Link
              to={url.protected.all.category}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-folder-open text-xs mr-2"></i>
              All Category
            </Link>

            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Subcategory
            </p>

            <Link
              to={url.protected.add.subCategory}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-text text-xs mr-2"></i>
              Add Subcategory
            </Link>

            <Link
              to={url.protected.all.subCategory}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-whistle text-xs mr-2"></i>
              All Subcategory
            </Link>
            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Users
            </p>
            <Link
              to={url.protected.user.customers}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-cricket text-xs mr-2"></i>
              Customers
            </Link>

            <Link
              to={url.protected.user.sellers}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-box-open text-xs mr-2"></i>
              Sellers
            </Link>
            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Orders
            </p>
            <Link
              to={url.protected.orders.all}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-swatchbook text-xs mr-2"></i>
              All orders
            </Link>

            <Link
              to={url.protected.orders.vendorOrder}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-atom-alt text-xs mr-2"></i>
              Orders of vendors
            </Link>
            <p className="uppercase text-xs text-gray-600 dark:text-gray-300 mb-4 mt-4 tracking-wider">
              Vendors
            </p>
            <Link
              to={url.protected.vendors.all}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-club text-xs mr-2"></i>
              All vendors
            </Link>
            <Link
              to={url.protected.vendors.add}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-store text-xs mr-2"></i>
              Add vendor
            </Link>
            <Link
              to={url.protected.vendors.reveiwsofvendor}
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
            >
              <i className="fad fa-cheese-swiss text-xs mr-2"></i>
              Reveiws of Vendors
            </Link>

            {/* <Link
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 dark:text-gray-100  transition ease-in-out duration-500"
          >
            <i className="fad fa-computer-classic text-xs mr-2"></i>
            Components
          </Link> */}
          </div>
        </div>
      </Drawer>
    </>
  );
}
