
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/specific/Login'
import FreedPage from "./view/FreedPage";
import SignUp from "./components/specific/SignUp";
import Home from "./view/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MicPermissions from "./view/MicPermissions";

const App = () => {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/freedpage" element={<FreedPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help/microhone" element={<MicPermissions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
