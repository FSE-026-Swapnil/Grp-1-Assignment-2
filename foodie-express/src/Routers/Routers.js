import React from "react"
import { Routes,Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";

const Routers = () => {
//   let isAuthenticated=true;
//   const location = useLocation();
  return (
    <div style={{minHeight:'1300px'}}>      
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />}  />
      {/* <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Service/:id" component={Service} />
      <Route  path="/Admin">
      {isAuthenticated === true ?
        <Admin />
      :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
      <Route component={PageNotFound} /> */}
      
      </Routes>

    </div>
  )
}

export default Routers;