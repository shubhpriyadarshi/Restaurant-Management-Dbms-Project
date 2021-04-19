import React, { Component, useState } from "react";
import User from "../images/User.png";
import Axios from "axios";

const Employee = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [employee, setemployee] = useState("");
  const [salary, setsalary] = useState(0);
  const [date, setdate] = useState("");
  const [status, setstatus] = useState("");

  const loginEmployee = () => {
    Axios.post("http://localhost:3001/loginemployee", {
      name: name,
      password: password,
    }).then((response) => {
      console.log(response);
      setemployee(response.data);
      if (response.data.message === "Not a Staff") {
        setstatus("");
      }
      if (response.data.message != "Not a Staff") {
        setstatus("Valid Staff");
      }
    });
  };

  const update = () => {
    Axios.post("http://localhost:3001/update", {
      name: name,
      password: password,
      date: date,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {status != "" ? (
        <div className="container" style={{ maxWidth: 700 }}>
          <li
            className="list-group-item active"
            aria-current="true"
            style={{ textAlign: "center" }}
          >
            Employee Details
          </li>
          {employee.map((employee) => (
            <table
              className="table"
              style={{ backgroundColor: "white", textAlign: "center" }}
            >
              <tbody>
                <tr>
                  <td>
                    <label for="eid">Employee Id </label>
                  </td>
                  <td>{employee.EmployeeId}</td>
                </tr>

                <tr>
                  <td>
                    <label for="ename">Employee Name </label>
                  </td>
                  <td>{employee.StaffName}</td>
                </tr>

                <tr>
                  <td>
                    <label for="noOFOrders">Number of Orders </label>
                  </td>
                  <td>{employee.NumberofOrders}</td>
                </tr>
                <tr>
                  <td>
                    <label for="ename">Check Up Date </label>
                  </td>
                  <td>{employee.CheckupDate}</td>
                </tr>
                <tr>
                  <td>
                    <label for="salary">Salary </label>
                  </td>
                  <td>{employee.NumberofOrders * 100}</td>
                </tr>
              </tbody>
            </table>
          ))}
          ;
          <button
            className="w-100 btn btn-info"
            onClick={update}
            type="button"
            style={{ marginTop: 20 }}
          >
            Update CheckUp Date
          </button>
          <div style={{ textAlign: "center" }} className="">
            <table className="table border-primary table-success">
              <thead>
                <tr>
                  <td>
                    <input
                      className="textbox"
                      onChange={(event) => {
                        setdate(event.target.value);
                      }}
                      type="text"
                      name="date"
                      placeholder="Enter Date YYYY-MM-DD"
                      size="35"
                    />
                  </td>
                  <td>
                    <button onClick={update}>Go</button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ) : (
        <div>
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
                        setname(event.target.value);
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
                    <a onClick={loginEmployee} href="#">
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
        </div>
      )}
    </div>
  );
};

export default Employee;
