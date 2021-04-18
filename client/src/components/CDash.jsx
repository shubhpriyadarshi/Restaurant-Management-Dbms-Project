import React, { Component, useState } from "react";
import Axios from "axios";
import Counter from "./Counter";

function CDash(props) {
  const [foodDetails, setfoodDetails] = useState([]);
  const [priceList, setpriceList] = useState([]);
  const [price, setprice] = useState(0);

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
    console.log(price);
  };

  const sendOrder = () => {
    Axios.post("http://localhost:3001/place-order", {
      email: props.email,
      password: props.password,
      f1: foodDetails[0].qty,
      f2: foodDetails[1].qty,
      f3: foodDetails[2].qty,
      f4: foodDetails[3].qty,
      f5: foodDetails[4].qty,
      f6: foodDetails[5].qty,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
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
        onClick={getPrice}
        className="w-100 btn btn-primary"
        type="button"
      >
        Calculate Total
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
        onClick={calculatePrice}
      >
        Get Price
      </button>
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
              <td>{price}</td>
              <td>{price}</td>
              <td>{price}</td>
              <td> {price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CDash;
