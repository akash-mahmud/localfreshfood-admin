import { mainCategoryStrore } from "./../types/mainCategory";
import create from "zustand";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import { IMainCategoryResponsce } from "interface/MainCategoryInterface";

const mainCategoryStore = create<mainCategoryStrore>((set) => ({
  mainCategory: [],
  loading: false,
  hasMore: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loading: data,
    }));
  },
  getMainCategory: async (page = 1) => {
    set(() => ({
      loading: true,
    }));
    const { data } = await axiosRequest.get<IMainCategoryResponsce>(
      `${endpoint.protected.all.mainCategory}/?page=${page}`
    );
    if (data.paginatedData.mainCategories.length < 25) {
      set(() => ({
        hasMore: false,
      }));
    }

    
    set((state: mainCategoryStrore) => ({
      mainCategory: [
        ...state.mainCategory,
        ...data.paginatedData.mainCategories,
      ],
      loading: false,
    }));
  },
}));

export default mainCategoryStore;
