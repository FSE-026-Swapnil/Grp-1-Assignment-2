import react, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [isAgent, setIsAgent] = useState(false);

  const registerNow = () => {
    setIsLogin(false);
    setIsOwner(false);
    setIsAgent(false);
  };

  const loginNow = () => {
    setIsLogin(true);
  };

  const optionHandler = (event) => {
    if (event.target.value === "Restaurant Owner") {
      setIsAgent(false);
      setIsOwner(true);
    } else if (event.target.value === "System User") {
      setIsOwner(false);
      setIsAgent(true);
    } else {
      setIsOwner(false);
      setIsAgent(false);
    }
  };

  return (
    <div className="card wrapper">
      <div class="card-header">
        {isLogin ? <h1>Sign In</h1> : <h1>Register</h1>}
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
                />
              </div>

              <div className="mb-3">
                <label>Restaurant Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter restaurant address"
                />
              </div>

              <div className="mb-3">
                <label>FSSAI No.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter FSSAI no."
                />
              </div>
            </div>
          ) : isAgent && !isLogin ? (
            <div>
              <div className="mb-3">
                <label>Home Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter home address"
                />
              </div>

              <div className="mb-3">
                <label>Mobile No.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter mobile no."
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
