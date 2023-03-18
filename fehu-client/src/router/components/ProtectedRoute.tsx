import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
}

export const ProtectedRoute = ({ isAuthenticated }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
