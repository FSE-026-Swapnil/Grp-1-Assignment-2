import react, { useState, useRef } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BASE_URL } from '../../Constants/APIConstants'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const [customerType, setCustomerType] = useState('');
  const emailRef = useRef('');
  const passRef = useRef('');
  const nameRef = useRef('');
  const fssaiRef = useRef('');
  const addrRef = useRef('');
  const mobRef = useRef('');

  const registerNow = () => {
    setIsLogin(false);
    setIsOwner(false);
    setIsAgent(false);
    emailRef.current.value ='';
    passRef.current.value = '';
  };

  const loginNow = () => {
    setIsLogin(true);
    emailRef.current.value ='';
    passRef.current.value = '';
  };

  const optionHandler = (event) => {
    if (event.target.value === "Restaurant Owner") {
      setIsAgent(false);
      setIsOwner(true);
      setCustomerType('Restaurant Owner');
    } else if (event.target.value === "System User") {
      setIsOwner(false);
      setIsAgent(true);
      setCustomerType('System User');
    } else {
      setIsOwner(false);
      setIsAgent(false);
      setCustomerType('Customer');
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let userData = {
      email : emailRef.current.value,
      password : passRef.current.value
    };
    
    if(customerType === 'Restaurant Owner'){
      userData = {
        ...userData,
        restaurantName : nameRef.current.value,
        restaurantAddr : addrRef.current.value,
        fssaiNo : fssaiRef.current.value
      }
    }else if(customerType === 'System User'){
      userData = {
        ...userData,
        mobileNo : mobRef.current.value
      }
    }

    console.log("userData ==>",userData,BASE_URL);

    if(isLogin){
      // Login
      fetch(BASE_URL + 'users?email=' + emailRef.current.value, {
        method: "GET"
      }).then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log(resp);
        if(resp.length > 0){
          if(resp[0].password === passRef.current.value){
            toast.success("Logged in successfully.");
          }else{
            toast.error("Invalid credentials.");
          }
        }else{
          toast.warn("Please enter valid credentials.");
        }
      });
    }else{
      // Sign Up
      fetch(BASE_URL + 'users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }).then((response) => {
        toast.success('Hurray!!! Registration completed.');
      });
    }
  };

  return (
    <div className="card wrapper">
      <div class="card-header">
        {isLogin ? <h1>Sign In</h1> : <h1>Register</h1>}
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              ref={emailRef}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              ref={passRef}
            />
          </div>

          { !isLogin &&  
          <div className="mb-3">
            <label>Sign up as</label>
            <select class="form-select" onChange={optionHandler}>
              <option value="default" selected>Select user type</option>
              <option value="Customer">Customer</option>
              <option value="Restaurant Owner">Restaurant Owner</option>
              <option value="System User">System User</option>
            </select>
          </div>
          }

          {isOwner && !isLogin ? (
            <div>
              <div className="mb-3">
                <label>Restaurant Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter restaurant name"
                  ref={nameRef}
                />
              </div>

              <div className="mb-3">
                <label>Restaurant Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter restaurant address"
                  ref={addrRef}
                />
              </div>

              <div className="mb-3">
                <label>FSSAI No.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter FSSAI no."
                  ref={fssaiRef}
                />
              </div>
            </div>
          ) : isAgent && !isLogin ? (
            <div>
              <div className="mb-3">
                <label>Mobile No.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter mobile no."
                  ref={mobRef}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              {isLogin ? <h5>Log In</h5> : <h5>Sign Up</h5>}
            </button>
          </div>
          {isLogin ? (
            <p className="text-center mt-4">
              Not a member&nbsp;&nbsp;
              <a href="#" onClick={registerNow}>
                Sign up now 🡺
              </a>
            </p>
          ) : (
            <p className="text-center mt-4">
              <a href="#" onClick={loginNow}>
                Login now 🡺
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
