export default interface User {
    name: string
    email:string
}

export interface userStrore {
  user: null | User;
  loadingUser: boolean;
  setLoading: (data: boolean) => void;
  setUser: (data: User) => void;
  userLogout: () => void;
}