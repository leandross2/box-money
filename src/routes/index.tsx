import {
  Routes,
  Route,

} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";

import { SignIn } from "../pages/SignIn";

export const AppRoutes = () => {
  return(
    <Routes >
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  )
}
