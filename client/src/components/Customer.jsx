import React, { Component, useState } from "react";
import "../css/Customer.css";
import User from "../images/User.png";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import CDash from "./CDash";
import Counter from "./Counter";

function Customer() {
  const [customer, setcustomer] = useState("");
  const [employees, setemployees] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setdate] = useState();
  const [status, setstatus] = useState("");
  const [employeeId, setemployeeId] = useState("");
  const [foodDetails, setfoodDetails] = useState([]);
  const [priceList, setpriceList] = useState([]);
  const [price, setprice] = useState(0);
  const [netprice, setnetprice] = useState(0);
  const [discount, setdiscount] = useState(0);

  const getMenu = () => {
    Axios.post("http://localhost:3001/menu", {}).then((response) => {
      setfoodDetails(
        response.data.map((foodDetails) => ({ ...foodDetails, qty: 0 }))
      );
      console.log(response);
      console.log(foodDetails);
    });
  };

  const getPrice = () => {
    Axios.post("http://localhost:3001/menu", {}).then((response) => {
      console.log(response);
      setpriceList(response.data);
      console.log(priceList);
    });
  };

  const onIncrement = (food) => {
    console.log("Increment", food);
    const foods = [...foodDetails];
    const index = foods.indexOf(food);
    foods[index] = { ...food };
    foods[index].qty++;
    setfoodDetails(foods);
  };

  const onDecrement = (food) => {
    console.log("Decrement", food);
    const foods = [...foodDetails];
    const index = foods.indexOf(food);
    foods[index] = { ...food };
    foods[index].qty--;
    setfoodDetails(foods);
  };

  const sum = () => {
    var msgTotal = foodDetails.reduce(function (prev, cur) {
      return prev + cur.UnitPrice * cur.qty;
    }, 0);
    setprice(msgTotal);
    evaluation();
  };

  const evaluation = () => {
    setdiscount(price >= 2000 ? 0.1 : 0);
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/getStaff", {}).then((response) => {
      console.log(response);
      setemployees(response.data);
      console.log(employees);
    });
  };

  const calculatePrice = () => {
    setprice(
      foodDetails[0].qty * foodDetails[0].UnitPrice +
        foodDetails[1].qty * foodDetails[1].UnitPrice +
        foodDetails[2].qty * foodDetails[2].UnitPrice +
        foodDetails[3].qty * foodDetails[3].UnitPrice +
        foodDetails[4].qty * foodDetails[4].UnitPrice +
        foodDetails[5].qty * foodDetails[5].UnitPrice
    );
    /* foodDetails.map((food) => ({ ...food, qty:})) */
    evaluation();
    console.log(price);
  };

  const sendOrder = () => {
    Axios.post("http://localhost:3001/create-order", {
      employeeId: employeeId,
      email: email,
      orderId: employeeId + date,
      date: date,
      foodDetails: foodDetails,
      /* f0: foodDetails[0].qty,
      f1: foodDetails[1].qty,
      f2: foodDetails[2].qty,
      f3: foodDetails[3].qty,
      f4: foodDetails[4].qty,
      f5: foodDetails[5].qty,
      a0: foodDetails[0].FoodId,
      a1: foodDetails[1].FoodId,
      a2: foodDetails[2].FoodId,
      a3: foodDetails[3].FoodId,
      a4: foodDetails[4].FoodId,
      a5: foodDetails[5].FoodId, */
    }).then((response) => {
      console.log(response);
    });

    /* sendOrder2();
    sendOrder3(); */

    /* Axios.post("http://localhost:3001/create-order-2", {
      orderId: employeeId + date,
      date: date,
      f2: foodDetails[2].qty,
      f3: foodDetails[3].qty,
      f4: foodDetails[4].qty,
      a2: foodDetails[2].FoodId,
      a3: foodDetails[3].FoodId,
      a4: foodDetails[4].FoodId,
    }).then((response) => {
      console.log(response);
    }); */
  };

  /* const sendOrder2 = () => {
    Axios.post("http://localhost:3001/create-order-2", {
      orderId: employeeId + date,
      date: date,
      f2: foodDetails[2].qty,
      f3: foodDetails[3].qty,
      f4: foodDetails[4].qty,
      a2: foodDetails[2].FoodId,
      a3: foodDetails[3].FoodId,
      a4: foodDetails[4].FoodId,
    }).then((response) => {
      console.log(response);
    });
  }; */

  const loginCustomer = () => {
    Axios.post("http://localhost:3001/user-login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      setpassword(response.data.Password);
      setcustomer(response.data.CustomerId);
      console.log(email);
      console.log(password);
      if (response.data.message === "Wrong User Details") {
        setstatus("");
      }
      if (response.data.message != "Wrong User Details") {
        setstatus("Valid Customer");
      }
    });
  };

  return (
    <div>
      {status != "" ? (
        <div className="container">
          <h1>Dashboard</h1>
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              Menu
            </li>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                onClick={getMenu}
                className="btn btn-primary me-md-2"
                type="button"
                style={{ marginTop: 10 }}
              >
                Get Menu
              </button>
            </div>
            <table className="table">
              <tbody>
                {foodDetails.map((food) => (
                  <tr>
                    <td>
                      <li className="list-group-item">
                        <form>
                          <label for="quantity"> {food.FoodName} </label>
                          <Counter
                            key={food.FoodName}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            food={food}
                          />
                          <label style={{ marginLeft: "50px" }} for="price">
                            Unit Price:{" "}
                            <span className="glyphicon glyphicon-search">
                              {food.UnitPrice}
                            </span>
                          </label>
                        </form>
                      </li>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>

          <button
            className="w-100 btn btn-info"
            type="button"
            style={{ marginTop: 20 }}
          >
            EmployeeId
          </button>
          <div style={{ textAlign: "center" }} className="">
            <table className="table border-primary table-success">
              <thead>
                <tr>
                  <td>
                    <input
                      className="textbox"
                      onChange={(event) => {
                        setemployeeId(event.target.value);
                      }}
                      type="text"
                      name="employeeId"
                      placeholder="Enter Employee ID"
                      size="35"
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          <button
            className="w-100 btn btn-info"
            type="button"
            style={{ marginTop: 20 }}
          >
            Date
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
                      placeholder="Enter Date of Order"
                      size="35"
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          <button
            onClick={getEmployees}
            className="w-100 btn btn-primary"
            type="button"
          >
            View All Employees
          </button>
          <a href="#" className="href">
            <button
              className="w-100 btn btn-success"
              type="button"
              style={{ marginTop: 20 }}
              onClick={sendOrder}
            >
              Proceed to Payment
            </button>
          </a>
          <button
            className="w-100 btn btn-success"
            type="button"
            style={{ marginTop: 20 }}
            onClick={sum}
          >
            Get Price
          </button>
          <table
            className="table container w-50"
            style={{ marginTop: 40, textAlign: "center" }}
          >
            <thead>
              <tr className="">
                <td className="table-info">EmployeeId</td>
              </tr>
              <tr className="">
                <td className="table-warning">StaffName</td>
              </tr>
            </thead>
          </table>
          {employees.map((employee) => {
            return (
              <table
                className="table container w-50"
                style={{ textAlign: "center" }}
              >
                <tbody>
                  <tr className="">
                    <td className="table-info">{employee.EmployeeId}</td>
                  </tr>
                  <tr className="">
                    <td className="table-warning">{employee.StaffName}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
          <div className="container">
            <table className="table table-bordered border-primary table-dark">
              <thead>
                <tr>
                  <td>Gross Amount</td>
                  <td>Amount Including Taxes</td>
                  <td>Discount</td>
                  <td> Net Amount</td>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td>{price}</td>
                  <td>{price * 1.18}</td>
                  <td>{price * 1.18 * discount}</td>
                  <td> {price * 1.18 * (1 - discount)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
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
                <a onClick={loginCustomer} href="#">
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
      )}
    </div>
  );
}

export default Customer;
