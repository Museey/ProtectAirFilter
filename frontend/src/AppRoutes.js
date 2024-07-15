import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilterPage from "./pages/Filter/FilterPage";
import LoginPage from "./pages/Login/LoginPage";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import FiltersAdminPage from "./pages/FiltersAdmin/FiltersAdminPage";
import FilterEditPage from "./pages/FilterEdit/FilterEditPage";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/filter/:id" element={<FilterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path="/admin/filters/:searchTerm?"
        element={
          <AdminRoute>
            <FiltersAdminPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/addFilter"
        element={
          <AdminRoute>
            <FilterEditPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/editFilter/:filterID"
        element={
          <AdminRoute>
            <FilterEditPage />
          </AdminRoute>
        }
      />
    </Routes>
  );
}
