import AuthLayout from "../../Layout/AuthLayout";
import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { ISubCategoryInput } from "interface/SubCategory";
import mainCategoryStore from "@/store/maincategoryStrore";
import categoryStore from "@/store/categoryStore";
import {
  loadctegoryOptions,
  loadMainactegoryOptions,
} from "../../utils/loadOptions";
import { ICategory } from "interface/Catgory";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import FormLayout from "@/layout/FormLayout";
interface selectOption {
  label: string;
  value: string;
}
const AddSubCategory = () => {
  const [subCategory, setsubCategory] = useState<ISubCategoryInput>({
    name: "",
    pageDesc: "",
    pageTitle: "",
    tags: "",
    isMainCategoryItem: false,
    mainCategoryId: "",
    categoryId: "",
  });
  const [loading, setloading] = useState(false);
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

    setsubCategory({
      ...subCategory,
      categoryId: e?.value ? e?.value : "",
    });
  };
  const onChangeMainCategory = (e: selectOption | null) => {
    setmainCurrentCategory(e);
    setsubCategory({
      ...subCategory,
      mainCategoryId: e?.value ? e?.value : "",
    });
  };

  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (
      !subCategory.name ||
      !subCategory.pageDesc ||
      !subCategory.pageTitle ||
      !subCategory.tags
    ) {
      toast.warn("Please fill the details first");
      return;
    }
    setloading(true);

    try {
      const { data } = await axiosRequest.post(
        endpoint.protected.add.subCategory,
        subCategory
      );

      if (data.message === "success") {
        setsubCategory({
          name: "",
          pageTitle: "",
          pageDesc: "",
          tags: "",
          mainCategoryId: "",
          categoryId: "",
          isMainCategoryItem: false,
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
        
        <form
          onSubmit={save}
         
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                onChange={({ target }) =>
                  setsubCategory({
                    ...subCategory,
                    name: target.value,
                  })
                }
                value={subCategory.name}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                onChange={({ target }) =>
                  setsubCategory({
                    ...subCategory,
                    pageTitle: target.value,
                  })
                }
                value={subCategory.pageTitle}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                onChange={({ target }) =>
                  setsubCategory({
                    ...subCategory,
                    pageDesc: target.value,
                  })
                }
                value={subCategory.pageDesc}
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
                onChange={({ target }) =>
                  setsubCategory({
                    ...subCategory,
                    tags: target.value,
                  })
                }
                value={subCategory.tags}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
              />
            )}
          </div>
          <div className="flex items-center pl-3">
            {loading ? (
              <Skeleton />
            ) : (
              <input
                id="mainCat"
                type="checkbox"
                checked={subCategory.isMainCategoryItem}
                onChange={({ target }) =>
                  setsubCategory({
                    ...subCategory,
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
          {subCategory.isMainCategoryItem ? (
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

          <button
            type="submit"
            disabled={loading as boolean}
            className="text-white bg-blue-700 hover:bg-blue-800  max-w-xs focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </form>
     </FormLayout>
   
    </AuthLayout>
  );
};

export default AddSubCategory;
