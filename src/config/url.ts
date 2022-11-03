const url = {
  normal: {
    login: "/login",
  },
  protected: {
    dashboard: {
      analytics: "/",
      ecommerce: "/ecommerece",
    },
    add: {
      product: "/addproduct",

      category: "/addcategory",
      mainCategory: "/addmaincategory",
      subCategory: "/addsubCategory",
    },
    all: {
      product: "/allproduct",
      vendor: "/allvendor",

      category: "/allcategory",
      mainCategory: "/allmaincategory",
      subCategory: "/allsubCategory",
    },
    detail: {
      product: "/detail/product/:id",

      category: "/detail/category/:id",
      mainCategory: "/detail/maincategory/:id",
      subCategory: "/detail/subCategory/:id",
    },
    orders: {
      all: "/allorders",
      vendorOrder: "/orders_of_vendors",
    },
    user: {
      sellers: "/sellers",
      customers: "/customers",
    },
    vendors: {
      all: "/vendors",
      reveiwsofvendor: "/reviews/vendors",
    },
  },
};

export default url