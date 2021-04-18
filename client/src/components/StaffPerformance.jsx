import React, { Component } from "react";
import Axios from "axios";

class StaffPerformance extends Component {
  state = {
    employees: [],
    id: "",
    noOfOrders: "",
  };

  getEmployee = () => {
    Axios.get("http://localhost:3001/getStaff", {}).then((response) => {
      console.log(response);
      this.setState({ employees: response.data });
      console.log(this.state.employees);
    });
  };

  reset = () => {
    Axios.post("http://localhost:3001/resetnoOfOrders", {}).then((response) => {
      console.log(response);
      this.getEmployee();
    });
  };

  updateEmployee = () => {
    Axios.post("http://localhost:3001/updateEmployee", {
      id: this.state.id,
      noOfOrders: this.state.noOfOrders,
    }).then((response) => {
      console.log(response);
      this.getEmployee();
      console.log("Transaction Successful");
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={this.getEmployee}
            class="btn btn-primary me-md-2"
            type="button"
          >
            Get Employee Info
          </button>
        </div>
        <div style={{ margin: 20, textAlign: "center" }}>
          <center>
            <h2>Employee Performance</h2>
          </center>
          <div class="card" style={{ minWidth: 1000, marginLeft: 230 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Number of Tables Booked</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr>
                    <td>{employee.EmployeeId}</td>
                    <td>{employee.StaffName}</td>
                    <td>{employee.NumberofOrders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={this.reset}
              className="w-100 btn btn-danger"
              type="button"
              style={{ marginTop: 20 }}
            >
              Reset Tables
            </button>
          </div>
        </div>
        <div className="container" style={{ maxWidth: 700 }}>
          <li
            className="list-group-item active"
            aria-current="true"
            style={{ textAlign: "center" }}
          >
            Update Employee Booked Tables
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
                    id="id"
                    name="id"
                    min="0"
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
                    min="0"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="align-items-center d-grid gap-2 d-md-flex justify-content-centre">
            <button
              onClick={() => {
                this.updateEmployee();
              }}
              className="w-100 btn btn-primary"
              type="button"
            >
              Update
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StaffPerformance;
