export default function Sidebar() {
  return (
    <>
      <div
        id="sideBar"
        className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster"
      >
        <div className="flex flex-col">
          <div className="text-right hidden md:block mb-4">
            <button id="sideBarHideBtn">
              <i className="fad fa-times-circle"></i>
            </button>
          </div>

          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
            homes
          </p>

          <a
            href="./index.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-chart-pie text-xs mr-2"></i>
            Analytics
          </a>

          <a
            href="./index-1.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-shopping-cart text-xs mr-2"></i>
            ecommerce
          </a>

          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Product
          </p>

          <a
            href="./email.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-envelope-open-text text-xs mr-2"></i>
            Add Product
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-comments text-xs mr-2"></i>
            All Product
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Main Category
          </p>
          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-shield-check text-xs mr-2"></i>
            Add Main Category
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-calendar-edit text-xs mr-2"></i>
            All Main Category
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Category
          </p>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
            Add Category
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-folder-open text-xs mr-2"></i>
            All Category
          </a>

          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Subcategory
          </p>

          <a
            href="./typography.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-text text-xs mr-2"></i>
            Add Subcategory
          </a>

          <a
            href="./alert.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-whistle text-xs mr-2"></i>
            All Subcategory
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Users
          </p>
          <a
            href="./buttons.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-cricket text-xs mr-2"></i>
            Customers
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-box-open text-xs mr-2"></i>
            Sellers
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Orders
          </p>
          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-swatchbook text-xs mr-2"></i>
            All orders
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-atom-alt text-xs mr-2"></i>
            Orders of vendors
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            Vendors
          </p>
          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-club text-xs mr-2"></i>
            All vendors
          </a>

          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-cheese-swiss text-xs mr-2"></i>
            Reveiws of Vendors
          </a>

          {/* <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-computer-classic text-xs mr-2"></i>
            Components
          </a> */}
        </div>
      </div>
    </>
  );
}
