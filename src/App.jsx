
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Header from './components/Header'
import FreedPage from "./components/FreedPage";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/freedpage" element={<FreedPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
