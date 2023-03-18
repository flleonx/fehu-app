import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute, UnprotectedRoute } from "./components";
import { LoginPage, RegisterPage } from "@auth/pages";
import { DashboardPage } from "@dashboard/pages";

export const AppRouter = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route element={<UnprotectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
