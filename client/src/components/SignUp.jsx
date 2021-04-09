import React, { useState } from "react";
import "../css/Customer.css";
import Axios from "axios";

function SignUp() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState(0);
  const [email, setemail] = useState("");

  const addCustomer = () => {
    Axios.post("http://localhost:3001/create-user", {
      name: name,
      password: password,
      phonenumber: phonenumber,
      email: email,
    }).then(() => {
      console.log("Values Inserted");
    });
  };

  return (
    <div>
      <form>
        <div className="card">
          <div className="container">
            <h2>
              <b>- Details -</b>
            </h2>
            <br />
            <input
              onChange={(event) => {
                setname(event.target.value);
              }}
              className="textbox"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              size="35"
            />
            <br />
            <input
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              className="textbox"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              size="35"
            />
            <br />
            <input
              onChange={(event) => {
                setphonenumber(event.target.value);
              }}
              className="textbox"
              type="phonenumber"
              name="phonenumber"
              placeholder="Enter Your Mobile No"
              size="35"
            />
            <br />
            <input
              onChange={(event) => {
                setemail(event.target.value);
              }}
              className="textbox"
              type="email"
              name="email"
              placeholder="Enter Your Mail"
              size="35"
            />
            <br />
            <a onClick={addCustomer} href="">
              <input
                className="btn_Next"
                type="button"
                name="next"
                value="Submit"
              />
            </a>
            <input
              className="btn_clear"
              type="reset"
              name="clear"
              value="Clear"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
