import React, { Component } from "react";

class ManagerDash extends Component {
  state = {
    managerDetails: {
      name: "Rakesh Singh",
      email: "rakesh342@gmail.com",
      checkUpDate: "14/6/2021",
    },
  };
  render() {
    const { name, email, checkUpDate } = this.state.managerDetails;
    return (
      <React.Fragment>
        <centre>
          <div
            className="card"
            style={{ color: "white", backgroundColor: "#0000ff" }}
          >
            <h4>Manager Details</h4>
            <div style={{ fontSize: 20 }}>
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>CheckUpDate : {checkUpDate}</p>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#0000ff" }}>
            <button className="btn btn-warning m-2">Check Up Date</button>
            <button className="btn btn-warning m-2">
              Add Staff To Database
            </button>
            <button className="btn btn-warning m-2">
              <a href="/Manager/StaffPerformance" className="href">
                Staff Performance
              </a>
            </button>
          </div>
        </centre>
      </React.Fragment>
    );
  }
}

export default ManagerDash;
