import AuthLayout from "../../Layout/AuthLayout";
import React, { useState } from "react";
import { IMainCategoryInput } from "interface/MainCategoryInterface";
import { toast } from "react-toastify";
import endpoint from "@/config/endpoints";
import axiosRequest from "@/http/axios";
import Skeleton from "react-loading-skeleton";
import FormLayout from "@/layout/FormLayout";
const AddMainCategory = () => {
  const [loading, setloading] = useState<Boolean>(false);
  const [mainCategory, setmainCategory] = useState<IMainCategoryInput>({
    name: "",
    pageTitle: "",
    pageDesc: "",
    tags: "",
  });
  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (
      !mainCategory.name ||
      !mainCategory.pageDesc ||
      !mainCategory.pageTitle ||
      !mainCategory.tags
    ) {
      toast.warn("Please fill the details first");
      return;
    }
    setloading(true);
    try {
      const { data } = await axiosRequest.post(
        endpoint.protected.add.mainCategory,
        mainCategory
      );
      setmainCategory({ name: "", pageTitle: "", pageDesc: "", tags: "" });
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
    setloading(false);
  };
  return (
    <AuthLayout>
      <FormLayout>
        <form onSubmit={save}>
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
                required
                value={mainCategory.name}
                onChange={(e) =>
                  setmainCategory({
                    ...mainCategory,
                    name: e.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Page title
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
                value={mainCategory.pageTitle}
                onChange={(e) =>
                  setmainCategory({
                    ...mainCategory,
                    pageTitle: e.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Page description
            </label>
            {loading ? (
              <Skeleton />
            ) : (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
                value={mainCategory.pageDesc}
                onChange={(e) =>
                  setmainCategory({
                    ...mainCategory,
                    pageDesc: e.target.value,
                  })
                }
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                required
                value={mainCategory.tags}
                onChange={(e) =>
                  setmainCategory({
                    ...mainCategory,
                    tags: e.target.value,
                  })
                }
              />
            )}
          </div>
          <button
            disabled={loading as boolean}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800  max-w-xs focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </form>
      </FormLayout>
    </AuthLayout>
  );
};

export default AddMainCategory;
