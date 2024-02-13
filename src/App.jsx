import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import  Home  from "./Pages/Home";
import {AuthContextProvider} from "./context/authContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Accounts from "./Pages/Accounts";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Accounts />
              </ProtectedRoute>
            }
          />
      </Routes>
    </AuthContextProvider>
    </>
  );
}
export default App;
