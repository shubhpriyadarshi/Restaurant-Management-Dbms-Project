import React, { Component } from "react";

class StaffPerformance extends Component {
  state = {
    employees: [
      { eid: 1, ename: "Ram ", noBooked: 3 },
      { eid: 2, ename: "Raju ", noBooked: 7 },
      { eid: 3, ename: "Mohan ", noBooked: 11 },
      { eid: 4, ename: "Suresh ", noBooked: 9 },
      { eid: 5, ename: "Harry ", noBooked: 5 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: 20 }}>
          <center>
            <h2>Employee Performance</h2>
          </center>
          <div class="card" style={{ minWidth: 1000, marginLeft: 60 }}>
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
                    <td>{employee.eid}</td>
                    <td>{employee.ename}</td>
                    <td>{employee.noBooked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StaffPerformance;
