import { categoryStrore } from "./../types/category";
import create from "zustand";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import { ICategoryResponsce } from "interface/Catgory";

const categoryStore = create<categoryStrore>((set) => ({
  category: [],
  loading: false,
  hasMore: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loading: data,
    }));
  },
  getCategory: async (page = 1) => {
  set(() => ({
    loading:true
  }));
    const { data } = await axiosRequest.get<ICategoryResponsce>(
      `${endpoint.protected.all.category}/?page=${page}`
    );
    if (data.paginatedData.categories.length <25) {
          set(() => ({
  hasMore : false
          }));
    }
    set((state: categoryStrore) => ({
      category: [...state.category, ...data.paginatedData.categories],
      loading: false,
    }));
  },
}));

export default categoryStore;
