import AuthLayout from "../../Layout/AuthLayout";

import { useState } from "react";
import { ICategoryInput } from "interface/Catgory";
import { toast } from "react-toastify";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import Skeleton from "react-loading-skeleton";
import FormLayout from "@/layout/FormLayout";
const AddCategory = () => {
  const [loading, setloading] = useState<Boolean>(false);
  const [category, setcategory] = useState<ICategoryInput>({
    name: "",
    pageTitle: "",
    pageDesc: "",
    tags: "",
  });
  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (
      !category.name ||
      !category.pageDesc ||
      !category.pageTitle ||
      !category.tags
    ) {
      toast.warn("Please fill the details first");
      return;
    }
    setloading(true);

    try {
      const { data } = await axiosRequest.post(
        endpoint.protected.add.category,
        category
      );

      if (data.message === "success") {
        setcategory({
          name: "",
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
    <>
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
                  onChange={(e) => {
                    setcategory({
                      ...category,
                      name: e.target.value,
                    });
                  }}
                  value={category.name}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
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
                  onChange={(e) => {
                    setcategory({
                      ...category,
                      pageTitle: e.target.value,
                    });
                  }}
                  value={category.pageTitle}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
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
                  onChange={(e) => {
                    setcategory({
                      ...category,
                      pageDesc: e.target.value,
                    });
                  }}
                  value={category.pageDesc}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
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
                  onChange={(e) => {
                    setcategory({
                      ...category,
                      tags: e.target.value,
                    });
                  }}
                  value={category.tags}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
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
    </>
  );
};

export default AddCategory;
