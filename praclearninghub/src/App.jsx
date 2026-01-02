import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { isAuthenticated } from "./utils/auth";
import Dashboard from "./pages/Dashboard";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/Login" />
}
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;