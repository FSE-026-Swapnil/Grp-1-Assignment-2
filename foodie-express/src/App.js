import React, {useState,useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Routers from "./Routers/Routers";
import AuthContext from "./Store/auth-context";
import { ToastContainer } from "react-toastify";

function App() {
  const [authstatus, setauthstatus] = useState(false);

  const loggedIn = () =>{
    setauthstatus(true);
  }

  const loggedOut = ()=>{
    setauthstatus(false);
  }

  return (
    <AuthContext.Provider value={{ status: authstatus,login: loggedIn, logout:loggedOut}}>
      <div class="container-fluid p-0">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Header />
        {authstatus &&  <Dashboard />}
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
