import React, { Component, useState } from "react";
import Axios from "axios";
import Counter from "./Counter";

function CDash() {
  const [foodDetails, setfoodDetails] = useState([]);
  const [price, setprice] = useState([]);
  const [quantity, setquantity] = useState([]);
  const [totalPrice, settotalPrice] = useState([]);
  const [priceList, setpriceList] = useState([]);
  const [counter, setcounter] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
  ]);
  const [combined, setcombined] = useState([]);

  let xyz = "dbms";

  const getMenu = () => {
    Axios.post("http://localhost:3001/menu", {}).then((response) => {
      setfoodDetails(response.data);
      console.log(response);
      console.log(foodDetails);
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

  const onIncrement = (counter) => {
    console.log("Increment", counter);
    const counters = [...counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    /* setState({ counters }); */
  };

  const onDecrement = (counter) => {
    console.log("Decrement", counter);
    const counters = [...counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    /* setState({ counters }); */
  };

  const onReset = () => {
    const counters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    /* setState({ counters }); */
  };

  const onDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = counters.filter((c) => c.id !== counterId);
    /* setState({ counters }); */
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button onClick={getMenu} class="btn btn-primary me-md-2" type="button">
          Get Menu
        </button>
      </div>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Menu
        </li>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <table className="table">
          <tbody>
            {foodDetails.map((food) => (
              <tr>
                <td>
                  <li className="list-group-item">
                    <form>
                      <label for="quantity"> {food.FoodName} </label>

                      <Counter
                        key={Counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={Counter}
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
        onClick={getPrice}
        className="w-100 btn btn-primary"
        type="button"
      >
        Calculate Total
      </button>
      <a href="/home" className="href">
        <button
          className="w-100 btn btn-success"
          type="button"
          style={{ marginTop: 20 }}
        >
          Proceed to Payment
        </button>
      </a>
      {priceList.map((pList) => {
        return (
          <div>
            <h3>{pList.UnitPrice}</h3>
          </div>
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
              <td>{xyz}</td>
              <td>{xyz}</td>
              <td>{xyz}</td>
              <td> {xyz}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CDash;
