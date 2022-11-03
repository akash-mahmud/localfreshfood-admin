import  {  useContext, createContext, useEffect } from "react";


import endpoints from "../config/endpoints";
import axiosRequest from "../http/axios";
import userStore from "../store/userStore";
import childrenProps from "../types/props";
import { authResponsce } from "../types/user";
const authContext = createContext({

});



export function ProvideAuth({ children }: childrenProps) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const setuser = userStore((store) => store.setUser);

  const setLoading = userStore((store) => store.setLoading);
  const loading = userStore((store) => store.loadingUser);

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      try {
        const { data } = await axiosRequest.get<authResponsce>(
          `${endpoints.protected.user}`,
          {
            withCredentials: true,
          }
        );
        if (data) {

          
          setuser(data.admin);
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

  const signin = (email: string, password: string, cb: () => void) => {
    return axiosRequest({
      method: "post",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: `${endpoints.login}`,
    }).then((res) => {
      if (res.data.admin) {
        axiosRequest
          .get<authResponsce>(`${endpoints.protected.user}`, {
            withCredentials: true,
          })
          .then(({ data }) => {
            setuser(data.admin);
            setLoading(false);
            cb();
          });
      } else {
        console.error("Something went wrong");
      }
    });
  };

  const signout = (cb: () => void) => {
    axiosRequest
      .get(`${process.env.REACT_APP_API_DATA}/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
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
