import React, { useState, useContext, createContext, useEffect } from "react";
import Axios from "axios";

import endpoints from "../config/endpoints";
import userStore from "../store/userStore";
import childrenProps from "../types/props";
const authContext = createContext({});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().

export function ProvideAuth({ children }: childrenProps) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const setuser = userStore((store) => store.setUser);

  const setLoading = userStore((store) => store.setLoading);
  const loading = userStore((store) => store.loadingUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await Axios.get(`${endpoints.protected.user}`, {
          withCredentials: true,
        });
        if (res.data) {
          const data = {
            user: res.data.data,
            loggedIn: true,
          };
          setuser(data);
        } else {
          setuser(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setuser(null);
      }
    };
    getUser();
  }, []);

  const signin = (email:string, password:string, cb:() => void) => {
    return Axios({
      method: "post",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: `${endpoints.login}`,
    }).then((res) => {
      if (res.data.user) {
        Axios.get(`${endpoints.protected.user}`, {
          withCredentials: true,
        }).then((res) => {
          const data = {
            user: res.data.data,
            loggedIn: true,
          };
          setuser(data);
          setLoading(false);
          cb();
        });
      } else {
        console.error("Something went wrong");
      }
    });
  };

  const signout = (cb:() => void) => {
    Axios.get(`${process.env.REACT_APP_API_DATA}/user/logout`, {
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        setuser(null);
        cb();
      }
    });
  };

  return {
    signin,
    signout,
  };
}
