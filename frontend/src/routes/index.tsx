import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import ProtectedRoute from "../components/ProtectedRoute";
import RoleGuard from "../components/RoleGuard";

import DashboardLayout from "../layouts/DashboardLayout";

import AdminDashboard from "../pages/dashboard/AdminDashboard";
import GuruDashboard from "../pages/dashboard/GuruDashboard";
import SiswaDashboard from "../pages/dashboard/SiswaDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />

      {/* DASHBOARD */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <RoleGuard allowed={["admin"]}>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/guru/*"
        element={
          <ProtectedRoute>
            <RoleGuard allowed={["guru"]}>
              <DashboardLayout>
                <GuruDashboard />
              </DashboardLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/siswa/*"
        element={
          <ProtectedRoute>
            <RoleGuard allowed={["siswa"]}>
              <DashboardLayout>
                <SiswaDashboard />
              </DashboardLayout>
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      {/* 404 fallback */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
