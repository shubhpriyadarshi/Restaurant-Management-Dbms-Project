import React, { Component } from "react";
import Axios from "axios";

class AddStaff extends Component {
  state = {
    id: "",
    name: "",
    password: "",
    noOfOrders: "",
    date: "",
  };

  createEmployee = () => {
    Axios.post("http://localhost:3001/createEmployee", {
      id: this.state.id,
      name: this.state.name,
      password: this.state.password,
      noOfOrders: this.state.noOfOrders,
      date: this.state.date,
    }).then((response) => {
      console.log(response);
      console.log("Values Inserted");
    });
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: 700 }}>
        <li
          className="list-group-item active"
          aria-current="true"
          style={{ textAlign: "center" }}
        >
          Add Employee
        </li>
        <table
          className="table"
          style={{ backgroundColor: "white", textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td>
                <label for="eid">Employee Id </label>
              </td>
              <td>
                <input
                  onChange={(event) => {
                    this.setState({ id: event.target.value });
                  }}
                  // style={{ marginLeft: "50px" }}
                  type="text"
                  id="eid"
                  name="eid"
                  min="0"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="ename">Employee Name </label>
              </td>
              <td>
                <input
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                  // style={{ marginLeft: "50px" }}
                  type="name"
                  id="ename"
                  name="ename"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="password">Password </label>
              </td>
              <td>
                <input
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                  // style={{ marginLeft: "50px" }}
                  type="password"
                  id="password"
                  name="password"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="noOFOrders">Number of Orders </label>
              </td>
              <td>
                <input
                  onChange={(event) => {
                    this.setState({ noOfOrders: event.target.value });
                  }}
                  // style={{ marginLeft: "50px" }}
                  type="text"
                  id="noOfOrders"
                  name="noOfOrders"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="checkup">Check Up Date </label>
              </td>
              <td>
                <input
                  onChange={(event) => {
                    this.setState({ date: event.target.value });
                  }}
                  // style={{ marginLeft: "50px" }}
                  type="text"
                  id="checkup"
                  name="checkup"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="align-items-center d-grid gap-2 d-md-flex justify-content-centre">
          <button
            onClick={() => {
              this.createEmployee();
            }}
            className="w-100 btn btn-primary"
            type="button"
          >
            Click To Add Employee
          </button>
        </div>
      </div>
    );
  }
}

export default AddStaff;
