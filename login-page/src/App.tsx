import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgetPassword";
import OTPVerification from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
