import React, { Component, useState } from "react";
import User from "../images/User.png";
import Axios from "axios";

const Employee = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginManager = () => {
    Axios.post("http://localhost:3001/manager", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <React.Fragment>
      <div>
        <centre>
          <form>
            <div className="card">
              <img src={User} />
              <div className="container">
                <h2>
                  <b>Sign in Form</b>
                </h2>

                <input
                  className="textbox"
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  type="text"
                  name="username"
                  placeholder="Enter The User Name"
                  size="35"
                />
                <br />
                <input
                  className="textbox"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  type="password"
                  name="username"
                  placeholder="Enter The Password"
                  size="35"
                />
                <p>Please sign in your account.</p>
                <br />
                <a onClick={loginManager} href="/eDash">
                  <input
                    className="btn_signin"
                    type="button"
                    name="signin"
                    value="Sign In"
                  />
                </a>
                <input
                  class="btn_clear"
                  type="reset"
                  name="clear"
                  value="Clear"
                ></input>
              </div>
            </div>
          </form>
        </centre>
      </div>
    </React.Fragment>
  );
};

export default Employee;
