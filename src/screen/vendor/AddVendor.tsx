import AuthLayout from "../../Layout/AuthLayout";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { AsyncPaginate } from "react-select-async-paginate";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { VendorInput } from "interface/Vendor";
import draftToHtml from "draftjs-to-html";

import { DropzoneArea } from "material-ui-dropzone";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import { toast } from "react-toastify";
import categoryStore from "@/store/categoryStore";
import { loadctegoryOptions } from "../../utils/loadOptions";
// store_name,
//   full_name_of_vendor,
//   email,
//   phone,
//   address,
//   county,
//   country,
//   postcode,
//   location,
//   description,
//   social_media,

//   policies,
//   vendor_logo,
//   userId;
//   categoryId,
//   pageTitle,
//   pageDesc,
//   tags;
const AddVendor = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );
    const [catPage, setcatPage] = useState(2);
  const [logoFile, setlogoFile] = useState();
  const [vendor, setVendor] = useState<VendorInput>({
    store_name: "",
    full_name_of_vendor: "",
    email: "",
    phone: "",
    address: "",
    county: "",
    country: "",
    postcode: "",
    location: "",
    description: "",
    social_media: "",
    meta_title: "",
    meta_desc: "",
    meta_tags: "",
    policies: "",
    vendor_logo: "",
    userId: "",
    categoryId: "",
    pageTitle: "",
    pageDesc: "",
    tags: "",
  });
    const {
      getCategory,
      category,
      loading: categoryLoading,
      hasMore: hasMoreCategories,
    } = categoryStore();
  const logoUpload = (filesData: any) => {
    if (!(!logoFile && filesData.length === 0)) {
      setlogoFile(filesData[0]);
    }
  };
  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!vendor.store_name || vendor.email || vendor.location) {
      toast.warn("Please fill all data properly");
      return;
    }
    try {
      const { status } = await axiosRequest.post(
        endpoint.protected.add.vendor,
        vendor
      );
      if (status === 200) {
        toast.success("Vendor added");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <AuthLayout>
        <div className="bg-gray-100 flex-1 p-6 md:mt-16">
          <form
            onSubmit={save}
            className="bg-white p-6 border border-gray-200 shadow-md "
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Store name
              </label>
              {loading ? (
                <Skeleton />
              ) : (
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      store_name: target.value,
                    })
                  }
                  value={vendor.store_name}
                />
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full name of vendor
              </label>
              {loading ? (
                <Skeleton />
              ) : (
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      full_name_of_vendor: target.value,
                    })
                  }
                  value={vendor.full_name_of_vendor}
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
                  // value={currentCategory}
                  loadOptions={(search) => {
                    getCategory(catPage);
                    setcatPage((previousPage) => previousPage + 1);
                    return loadctegoryOptions(
                      search,
                      category,
                      hasMoreCategories
                    );
                  }}
                  // onChange={(e) => onchangeCategory(e)}
                />
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vendor logo
              </label>
              <div>
                {loading ? (
                  <Skeleton />
                ) : (
                  <DropzoneArea filesLimit={1} onChange={logoUpload} />
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
              <div className=" border-gray-800 h-72 shadow mb-6 editor_cstm">
                {loading ? (
                  <Skeleton />
                ) : (
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={(newState) => {
                      setEditorState(newState);

                      setVendor({
                        ...vendor,
                        description: draftToHtml(
                          convertToRaw(newState.getCurrentContent())
                        ),
                      });
                    }}
                  />
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="postcode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Postcode
              </label>
              {loading ? (
                <Skeleton />
              ) : (
                <input
                  type="text"
                  id="postcode"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      postcode: target.value,
                    })
                  }
                  value={vendor.postcode}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                />
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="policies"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Policies
              </label>
              {loading ? (
                <Skeleton />
              ) : (
                <textarea
                  id="policies"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      policies: target.value,
                    })
                  }
                  value={vendor.policies}
                  className="bg-gray-50 border border-gray-300 h-52 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
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
                    setVendor({
                      ...vendor,
                      pageTitle: target.value,
                    })
                  }
                  value={vendor.pageTitle}
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
                  type="text"
                  id="email"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      pageDesc: target.value,
                    })
                  }
                  value={vendor.pageDesc}
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
                  type="text"
                  id="email"
                  onChange={({ target }) =>
                    setVendor({
                      ...vendor,
                      tags: target.value,
                    })
                  }
                  value={vendor.tags}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                />
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800  max-w-xs focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              disabled={loading}
            >
              Submit
            </button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default AddVendor;
