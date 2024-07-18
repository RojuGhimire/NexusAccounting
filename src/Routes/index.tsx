import Homepage from "@/components/Home/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import TermsAndConditions from "@/Pages/Terms";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
