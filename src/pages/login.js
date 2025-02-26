import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate({
      pathname: "/home",
    });
    console.log('ad');
    
  };
  const handleOnChange = (e) => {
    console.log(e,'e')
  };
  return (
    <>
      <div class="box">
        <span class="borderLine"></span>
        <form action="">
          <h2>Sign in</h2>
          <div class="inputBox">
            <input type="text" required onChange={(e) => handleOnChange(e)} />
            <span>Username</span>
            <i></i>
          </div>
          <div class="inputBox">
            <input
              type="password"
              required
              onChange={(e) => handleOnChange(e)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </div>
          <input
            type="submit"
            id="submit"
            value="Login"
            onClick={() => handleLogin()}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
// export default Courses
