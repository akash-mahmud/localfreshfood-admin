import Category, { categoryStrore } from "./../types/category";
import create from "zustand";


const categoryStore = create<categoryStrore>((set) => ({
  category: [],
  loading: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loading: data,
    }));
  },
  setCategory: (data: []| Category) => {
    set(() => ({
      category: data,
    }));
  },
}));

export default categoryStore;
