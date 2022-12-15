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
      seller: "/seller",
      product: "/product",
      category: "/category",
      subCategory: "/subCategory",
      vendor: "/vendor",
    },
    add: {
      mainCategory: "/mainCategory",
      vendor: "/vendor",
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
    media: {
      singleUpload: "/media/upload/single",
      multiUpload: "/media/upload/multiple",
    },
  },
};

export default endpoint;
