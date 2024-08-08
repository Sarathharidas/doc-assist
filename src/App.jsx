import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/specific/Login";
import Record from "./view/Record";
import SignUp from "./components/specific/SignUp";
import Home from "./view/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MicPermissions from "./view/MicPermissions";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/record"
            element={
              <PrivateRoute>
                <Record />
              </PrivateRoute>
            }
          />
          <Route
            path="/record/:id"
            element={
              <PrivateRoute>
                <Record />
              </PrivateRoute>
            }
          />
          <Route
            path="/visit"
            element={
              <PrivateRoute>
                <Record sidebar={true} />
              </PrivateRoute>
            }
          />
          <Route
            path="/visit/:id"
            element={
              <PrivateRoute>
                <Record visit={true} />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help/microhone" element={<MicPermissions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
