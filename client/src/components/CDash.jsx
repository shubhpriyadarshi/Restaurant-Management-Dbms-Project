import React, { Component, useState } from "react";
import Axios from "axios";

function CDash() {
  const [foodName, setfoodName] = useState("");
  const [unitPrice, setunitPrice] = useState("");

  const getMenu = () => {
    Axios.post("http://localhost:3001/menu", {}).then((response) => {
      console.log(response.data);
      setfoodName(response.data);
      console.log(foodName);
    });
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Menu
        </li>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                    <label for="price">Unit Price:</label>
                    <input
                      type="number"
                      id="unitPrice"
                      name="Unit Price"
                      min="0"
                    />
                  </form>
                </li>
              </td>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                  </form>
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                  </form>
                </li>
              </td>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                  </form>
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                  </form>
                </li>
              </td>
              <td>
                <li className="list-group-item">
                  <form>
                    <label for="quantity">Quantity:</label>
                    <input
                      style={{ marginLeft: "50px" }}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                    />
                  </form>
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      \
      <div className="align-items-center d-grid gap-2 d-md-flex justify-content-centre">
        <button
          onClick={getMenu}
          className="w-100 btn btn-primary"
          type="button"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default CDash;
