import React, { Component, useState } from "react";
import "../css/Customer.css";
import User from "../images/User.png";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function Customer() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailauth, setemailauth] = useState("");
  const [passwordauth, setpasswordauth] = useState("");
  let history = useHistory();

  const loginCustomer = () => {
    Axios.post("http://localhost:3001/user-login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      setemailauth(response.data.email);
      setpasswordauth(response.data.email);
      console.log(email);
      console.log(password);
    });
  };

  return (
    <div>
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
              type="email"
              name="email"
              placeholder="Enter The Email"
              size="35"
            />
            <br />
            <input
              className="textbox"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              type="password"
              name="password"
              placeholder="Enter The Password"
              size="35"
            />
            <p>Please sign in your account.</p>
            <a href="/customer/signUp">Sign up newcomers.!</a>
            <br />
            <a onClick={loginCustomer} href="/cDash">
              <input
                className="btn_signin"
                type="button"
                name="signin"
                value="Login"
              />
            </a>
            <input
              className="btn_clear"
              type="reset"
              name="clear"
              value="Clear"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Customer;
