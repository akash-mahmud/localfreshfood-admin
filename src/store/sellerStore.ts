import { ISellersResponsce } from "./../interface/Seller";

import create from "zustand";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";
import { ISellerStrore } from "interface/Seller";

const sellerStore = create<ISellerStrore>((set) => ({
  sellers: [],
  loading: false,
  hasMore: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loading: data,
    }));
  },
  getSeller: async (page = 1) => {
    set(() => ({
      loading: true,
    }));
    const { data } = await axiosRequest.get<ISellersResponsce>(
      `${endpoint.protected.all.seller}/?page=${page}`
    );
    if (data.paginatedData.sellers.length < 25) {
      set(() => ({
        hasMore: false,
      }));
    }
    set((state: ISellerStrore) => ({
      sellers: [...state.sellers, ...data.paginatedData.sellers],
      loading: false,
    }));
  },
}));

export default sellerStore;
