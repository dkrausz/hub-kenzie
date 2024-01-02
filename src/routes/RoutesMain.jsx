import { Routes, Route, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("@token");
    setUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage user={user} userLogout={userLogout} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
