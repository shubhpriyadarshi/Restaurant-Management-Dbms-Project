import React, { Component } from "react";
import Axios from "axios";

class EmployeeDash extends Component {
  state = {
    employee: {
      eid: "35135121",
      ename: "Chandu",
      noOfOrders: "12",
      checkUpDate: "7/4/2021",
    },
    salary: 0,
    emprec: [],
  };

  getEmployee = () => {
    Axios.post("http://localhost:3001/employeeInfo", {}).then((response) => {
      console.log(response);
      this.setState({ employee: response.data });
      console.log(this.state.employee);
    });
  };

  getSalary = () => {
    this.state.salary = this.state.employee.noOfOrders * 100;
    this.setState({ salary: this.state.salary });
    console.log(this.state.salary);
  };

  render() {
    const { eid, ename, noOfOrders, checkUpDate } = this.state.employee;
    return (
      <div className="container" style={{ maxWidth: 700 }}>
        <li
          className="list-group-item active"
          aria-current="true"
          style={{ textAlign: "center" }}
        >
          Employee Details
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
              <td>{eid}</td>
            </tr>

            <tr>
              <td>
                <label for="ename">Employee Name </label>
              </td>
              <td>{ename}</td>
            </tr>

            <tr>
              <td>
                <label for="noOFOrders">Number of Orders </label>
              </td>
              <td>{noOfOrders}</td>
            </tr>
            <tr>
              <td>
                <label for="ename">Check Up Date </label>
              </td>
              <td>{checkUpDate}</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={this.getSalary}
          className="w-100 btn btn-info"
          type="button"
          style={{ marginTop: 20 }}
        >
          Check Salary
        </button>
        <div style={{ textAlign: "center" }} className="">
          <table className="table table-bordered border-primary table-success">
            <thead>
              <tr>
                <td>Rich</td>
              </tr>
            </thead>
          </table>
        </div>
        <button
          className="w-100 btn btn-info"
          onClick={this.getEmployee}
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
                  <input></input>
                </td>
                <td>
                  <button>Go</button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeDash;
