import Homepage from "@/components/Home/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
