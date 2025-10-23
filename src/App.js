import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Dashboard from "./pages/Dashboard";
import CalendarView from "./pages/CalendarView";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Appointments from "./pages/admin/Appointments";
import AddProvider from "./pages/admin/AddProvider";
import ProviderList from "./pages/admin/ProviderList";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<CalendarView />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Nested Admin Routes */}
          <Route path="admin" element={<AdminPanel />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="add-provider" element={<AddProvider />} />
            <Route path="providers" element={<ProviderList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
