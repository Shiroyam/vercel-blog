import { useLocation, Navigate } from "react-router-dom";

export const RequireAuht = ({ children }) => {
  const location = useLocation();
  if (localStorage.getItem("token")) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};


