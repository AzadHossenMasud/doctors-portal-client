import { is } from "date-fns/locale";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading]= useAdmin(user.email)

//   console.log(isAdmin, isAdminLoading);

  const location = useLocation();
  if(loading || isAdminLoading ){
    return <button className="btn loading">loading</button>
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AdminRoute;
