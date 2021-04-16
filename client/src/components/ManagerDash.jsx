import React, { Component } from "react";
import Axios from "axios";

class ManagerDash extends Component {
  state = {
    managerDetails: [],
  };

  getManager = () => {
    Axios.get("http://localhost:3001/managerInfo", {}).then((response) => {
      console.log(response);
      this.setState({ managerDetails: response.data });
      console.log(this.state.managerDetails);
    });
  };

  render() {
    const { name, email, checkUpDate } = this.state.managerDetails;
    return (
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={this.getManager}
            class="btn btn-primary me-md-2"
            type="button"
            style={{ marginBottom: 20 }}
          >
            Get Your Info
          </button>
        </div>
        <li
          className="list-group-item active"
          aria-current="true"
          style={{ textAlign: "center" }}
        >
          Manager Details
        </li>
        <table
          className="table"
          style={{ backgroundColor: "white", textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td>
                <label for="name">Name</label>
              </td>
              {this.state.managerDetails.map((manager) => (
                <td>{manager.ManagerName}</td>
              ))}
            </tr>

            <tr>
              <td>
                <label for="email">Email</label>
              </td>
              {this.state.managerDetails.map((manager) => (
                <td>{manager.EmailId}</td>
              ))}
            </tr>
          </tbody>
        </table>
        <a href="/AddStaff" className="href">
          <button
            className="w-100 btn btn-success"
            type="button"
            style={{ marginTop: 20 }}
          >
            Add Staff To Database
          </button>
        </a>
        <a href="/Manager/StaffPerformance" className="href">
          <button
            className="w-100 btn btn-secondary"
            type="button"
            style={{ marginTop: 20 }}
          >
            Staff Performance
          </button>
        </a>
      </div>
    );
  }
}

export default ManagerDash;
