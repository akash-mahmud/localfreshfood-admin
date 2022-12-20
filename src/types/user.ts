export default interface User {
    name: string
  email: string
  
}

export interface userStrore {
  user: null | User;
  loadingUser: boolean;
  setLoading: (data: boolean) => void;
  setUser: (data: User | null) => void;
  userLogout: () => void;
}


export interface authResponsce {
  message: string;
  admin: User;
}