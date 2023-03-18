import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
}

export const UnprotectedRoute = ({ isAuthenticated }: Props) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};
