const endpoint = {
  login: "/admin/login",
  protected: {
    user: "/user/auth/admin",

    detail: {
      mainCategory: "/mainCategory/:id",
      product: "/product/:id",
      category: "/category/:id",
      subCategory: "/subCategory/:id",
    },
    all: {
      mainCategory: "/mainCategory",
      product: "/product",
      category: "/category",
      subCategory: "/subCategory",
    },
    add: {
      mainCategory: "/mainCategory",
      product: "/product",
      category: "/category",
      subCategory: "/subCategory",
    },
    update: {
      mainCategory: "/mainCategory/:id",
      product: "/product/:id",
      category: "/category/:id",
      subCategory: "/subCategory/:id",
    },
  },
};

export default endpoint;
