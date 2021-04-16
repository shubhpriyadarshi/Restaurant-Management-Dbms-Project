import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Home";
import Employee from "./Employee";
import Navbar from "./Navbar";
import Customer from "./Customer";
import SignUp from "./SignUp";
import Manager from "./Manager";
import CDash from "./CDash";
import Payment from "./Payment";
import ManagerDash from "./ManagerDash";
import StaffPerformance from "./StaffPerformance";
import EmployeeDash from "./EmployeeDash";
import AddStaff from "./AddStaff";

function CAll() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Router>
          <Switch>
            <Route
              path={"/manager/staffPerformance"}
              component={StaffPerformance}
            />
            <Route path={"/mDash"} component={ManagerDash} />
            <Route path={"/AddStaff"} component={AddStaff} />
            <Route path={"/eDash"} component={EmployeeDash} />
            <Route path={"/customer/signUp"} component={SignUp} />
            <Route path={"/payment"} component={Payment} />
            <Route path={"/customer"} component={Customer} />
            <Route path={"/employee"} component={Employee} />
            <Route path={"/manager"} component={Manager} />
            <Route path={"/cDash"} component={CDash} />
            <Route path={"/"} component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default CAll;
