import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoute";
import { ProvideAuth } from "./hooks/auth";
import url from "./config/url";
import Analytics from "./screen/dashboard/Analytics";
import Login from "./screen/Login";
import Ecommerce from "./screen/dashboard/Ecommerce";
import AddCategory from "./screen/category/AddCategory";
import AddMainCategory from "./screen/maincategory/AddMainCategory";
import AddProduct from "./screen/product/AddProduct";
import AddSubCategory from "./screen/subcategory/AddSubCategory";
import AllCategory from "./screen/category/AllCategory";
import AllMainCategory from "./screen/maincategory/AllMainCategory";
import AllProduct from "./screen/product/AllProduct";
import AllSubCategory from "./screen/subcategory/AllSubCategory";
import AllVendor from "./screen/vendor/AllVendor";
import CategoryDetail from "./screen/category/CategoryDetail";
import MainCategoryDetail from "./screen/maincategory/MainCategoryDetail";
import ProductDetail from "./screen/product/ProductDetail";
import SubcategoryDetail from "./screen/subcategory/SubcategoryDetail";
import AllOrder from "./screen/orders/AllOrder";
import OrderOfVendors from "./screen/orders/OrderOfVendors";
import Customers from "./screen/user/Customers";
import Sellers from "./screen/user/Sellers";
import ReveiwsOfVendors from "./screen/vendor/ReveiwsOfVendors";
import AddVendor from "./screen/vendor/AddVendor";

const AppRoutes: React.FC = () => {
  return (
    <ProvideAuth>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path={url.protected.dashboard.analytics}
            element={<Analytics />}
          />
          <Route
            path={url.protected.dashboard.ecommerce}
            element={<Ecommerce />}
          />
          <Route path={url.protected.add.category} element={<AddCategory />} />
          <Route
            path={url.protected.add.mainCategory}
            element={<AddMainCategory />}
          />
          <Route path={url.protected.add.product} element={<AddProduct />} />
          <Route
            path={url.protected.add.subCategory}
            element={<AddSubCategory />}
          />
          <Route path={url.protected.all.category} element={<AllCategory />} />
          <Route
            path={url.protected.all.mainCategory}
            element={<AllMainCategory />}
          />
          <Route path={url.protected.all.product} element={<AllProduct />} />
          <Route
            path={url.protected.all.subCategory}
            element={<AllSubCategory />}
          />
          <Route path={url.protected.vendors.all} element={<AllVendor />} />
          <Route
            path={url.protected.detail.category}
            element={<CategoryDetail />}
          />
          <Route
            path={url.protected.detail.mainCategory}
            element={<MainCategoryDetail />}
          />
          <Route
            path={url.protected.vendors.add}
            element={<AddVendor />}
          />
          <Route
            path={url.protected.detail.product}
            element={<ProductDetail />}
          />
          <Route
            path={url.protected.detail.subCategory}
            element={<SubcategoryDetail />}
          />
          <Route path={url.protected.orders.all} element={<AllOrder />} />
          <Route
            path={url.protected.orders.vendorOrder}
            element={<OrderOfVendors />}
          />
          <Route path={url.protected.user.customers} element={<Customers />} />
          <Route path={url.protected.user.sellers} element={<Sellers />} />
          <Route path={url.protected.vendors.all} element={<AllVendor />} />
          <Route
            path={url.protected.vendors.reveiwsofvendor}
            element={<ReveiwsOfVendors />}
          />
        </Route>

        <Route path={url.normal.login} element={<Login />} />
      </Routes>
    </ProvideAuth>
  );
};

export default AppRoutes;
