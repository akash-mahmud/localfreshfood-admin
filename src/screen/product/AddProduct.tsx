import AuthLayout from "../../Layout/AuthLayout";

import { DropzoneArea } from "material-ui-dropzone";
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { IProductInput } from "interface/Product";
import draftToHtml from "draftjs-to-html";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import mainCategoryStore from "@/store/maincategoryStrore";
import categoryStore from "@/store/categoryStore";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  loadctegoryOptions,
  loadMainactegoryOptions,
} from "../../utils/loadOptions";
import FormLayout from "../../Layout/FormLayout";
interface selectOption {
  label: string;
  value: string;
}
const AddProduct = () => {
  const [files, setfiles] = useState();
  const [loading, setloading] = useState<boolean>(false);
  const [product, setproduct] = useState<IProductInput>({
    name: "",
    images: [""],

    description: "",
    price: 0,
    sku: "",
    isMainCategoryItem: false,
    categoryId: "",
    subCatgoryId: "",
    mainCategoryId: "",
    pageTitle: "",
    pageDesc: "",
    tags: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleChange = (filesData: any) => {
    if (!(!files && filesData.length === 0)) {
      setfiles(filesData);
    }
  };
  const [catPage, setcatPage] = useState(2);
  const [maincatPage, setmaincatPage] = useState(2);
  const [currentCategory, setcurrentCategory] = useState<selectOption | null>();
  const [maincurrentCategory, setmainCurrentCategory] =
    useState<selectOption | null>();
  const {
    getMainCategory,
    mainCategory,
    loading: mainCategoryLoading,
    hasMore: hasMoreMainCategories,
  } = mainCategoryStore();

  const {
    getCategory,
    category,
    loading: categoryLoading,
    hasMore: hasMoreCategories,
  } = categoryStore();
  useEffect(() => {
    getCategory(1);
    getMainCategory(1);
  }, []);
  const onchangeCategory = (e: selectOption | null) => {
    setcurrentCategory(e);

    setproduct({
      ...product,
      categoryId: e?.value ? e?.value : "",
    });
  };
  const onChangeMainCategory = (e: selectOption | null) => {
    setmainCurrentCategory(e);
    setproduct({
      ...product,
      mainCategoryId: e?.value ? e?.value : "",
    });
  };

  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (
      !product.name ||
      !product.pageDesc ||
      !product.pageTitle ||
      !product.tags
    ) {
      toast.warn("Please fill the details first");
      return;
    }
    setloading(true);
    try {
      const { data } = await axiosRequest.post(
        endpoint.protected.add.product,
        product
      );

      if (data.message === "success") {
        setproduct({
          name: "",
          images: [""],

          description: "",
          price: 0,
          sku: "",
          isMainCategoryItem: false,
          categoryId: "",
          subCatgoryId: "",
          mainCategoryId: "",
          pageTitle: "",
          pageDesc: "",
          tags: "",
        });
        toast.success(data.message);
        setloading(false);
        return;
      }
      toast.error(data.message);
      setloading(false);
      return;
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <AuthLayout>
      <FormLayout>
        <form onSubmit={save}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    name: target.value,
                  })
                }
                value={product.name}
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Category
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <AsyncPaginate
                className="bg-white dark:bg-gray-700"
                isLoading={false}
                // loadingMessage={""}
                value={currentCategory}
                loadOptions={(search) => {
                  getCategory(catPage);
                  setcatPage((previousPage) => previousPage + 1);
                  return loadctegoryOptions(
                    search,
                    category,
                    hasMoreCategories
                  );
                }}
                onChange={(e) => onchangeCategory(e)}
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Images
            </label>
            <div>
              {loading ? (
                <Skeleton />
              ) : (
                <DropzoneArea filesLimit={20} onChange={handleChange} />
              )}
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-300"
            >
              Description
            </label>
            <div className=" border-gray-800 dark:border-gray-300 dark:text-white shadow dark:bg-gray-700">
              {loading ? (
                <Skeleton />
              ) : (
                <Editor
                  editorState={editorState}
                  onEditorStateChange={(newState) => {
                    setEditorState(newState);

                    setproduct({
                      ...product,
                      description: draftToHtml(
                        convertToRaw(newState.getCurrentContent())
                      ),
                    });
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex items-center pl-3 mb-6">
            {loading ? (
              <Skeleton />
            ) : (
              <input
                id="mainCat"
                type="checkbox"
                checked={product.isMainCategoryItem}
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    isMainCategoryItem: target.checked,
                  })
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
            )}
            <label
              htmlFor="mainCat"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Main category Item?
            </label>
          </div>
          {product.isMainCategoryItem ? (
            <div className="mb-6 mt-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Main Category
              </label>
              {loading ? (
                <Skeleton />
              ) : (
                <AsyncPaginate
                  isLoading={false}
                  // loadingMessage={""}
                  value={maincurrentCategory}
                  loadOptions={(search) => {
                    getMainCategory(maincatPage);
                    setmaincatPage((previousPage) => previousPage + 1);
                    return loadMainactegoryOptions(
                      search,
                      mainCategory,
                      hasMoreMainCategories
                    );
                  }}
                  onChange={(e) => onChangeMainCategory(e)}
                />
              )}
            </div>
          ) : null}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                min={0}
                type="number"
                id="email"
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    price: parseInt(target.value),
                  })
                }
                value={product.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sku
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                id="email"
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    sku: target.value,
                  })
                }
                value={product.sku}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Page Title
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                id="email"
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    pageTitle: target.value,
                  })
                }
                value={product.pageTitle}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Page Description
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                id="email"
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    pageDesc: target.value,
                  })
                }
                value={product.pageDesc}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tags
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                id="email"
                onChange={({ target }) =>
                  setproduct({
                    ...product,
                    tags: target.value,
                  })
                }
                value={product.tags}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
              />
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 dark:bg-gray-900 hover:bg-blue-800  max-w-xs focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 transition-all text-center  dark:hover:bg-gray-800 dark:focus:ring-blue-800 "
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </FormLayout>
    </AuthLayout>
  );
};

export default AddProduct;
