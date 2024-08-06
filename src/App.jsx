import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/specific/Login";
import Record from "./view/Record";
import SignUp from "./components/specific/SignUp";
import Home from "./view/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MicPermissions from "./view/MicPermissions";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/record" element={<Record />} />
          <Route path="/record/:id" element={<Record />} />
          <Route path="/visit" element={<Record sidebar={true} />} />
          <Route path="/visit/:id" element={<Record visit={true} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help/microhone" element={<MicPermissions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
