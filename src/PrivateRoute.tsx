import { Navigate, Outlet } from "react-router-dom";
import url from "@/config/url";
import userStore from "./store/userStore";

import User from "./types/user";



function PrivateRoutes() {


  const userLoadingState = userStore(
    (state: { loadingUser: boolean }) => state.loadingUser
  );
  const user = userStore((state: { user: User | null }) => state.user);

  
  if (userLoadingState) {
    return (
      <div>
        {" "}
        <span className="loaderspin">
          <i className="fa fa-refresh fa-spin loader"></i>
        </span>
      </div>
    );
  }

  return (
    <>
      {user && !userLoadingState ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to={url.normal.login} />
      )}
    </>
  );
}

export default PrivateRoutes;
