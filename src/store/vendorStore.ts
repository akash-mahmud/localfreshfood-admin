import create from "zustand";
import axiosRequest from "@/http/axios";
import endpoint from "@/config/endpoints";

import { IVendorsResponsce, IVendorStrore } from "interface/Vendor";

const vendorStore = create<IVendorStrore>((set) => ({
  vendors: [],
  loading: false,
  hasMore: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loading: data,
    }));
  },
  getVendor: async (page = 1) => {
    set(() => ({
      loading: true,
    }));
    const { data } = await axiosRequest.get<IVendorsResponsce>(
      `${endpoint.protected.all.vendor}/?page=${page}`
    );

    if (data.paginatedData.vendors.length < 25) {
      set(() => ({
        hasMore: false,
      }));
    }
    if (page===1) {
          set(() => ({
            vendors:  data.paginatedData.vendors,
            loading: false,
          }));
    } else {
          set((state: IVendorStrore) => ({
            vendors: [...state.vendors, ...data.paginatedData.vendors],
            loading: false,
          }));
    }

  },
}));

export default vendorStore;
