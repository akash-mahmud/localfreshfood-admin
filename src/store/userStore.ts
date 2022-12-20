import create from "zustand";
import User, { userStrore } from "../types/user";

const userStore = create<userStrore>((set) => ({
  user: null,
  loadingUser: true,
  setLoading: (data: boolean) => {
    set(() => ({
      loadingUser: data,
    }));
  },
  setUser: (data: User | null) => {
    set(() => ({
      user: data,
    }));
  },
  userLogout: () => {},
}));

export default userStore;
