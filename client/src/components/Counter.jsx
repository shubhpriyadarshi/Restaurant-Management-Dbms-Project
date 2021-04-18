import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    const { food, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(food)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(food)}
              className="btn btn-secondary btn-sm m-2"
              disabled={food.qty === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.food.qty === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { qty } = this.props.food;
    return qty === 0 ? "Zero" : qty;
  }
}

export default Counter;
