import React, { Component } from "react";

export default class Counter extends Component {

    state = {
        count: 0
    };

  // wrap in a <div> because babel can only render 1 element at a time
  // wrapping it in a div can wrap multiple elements inside 1 - need a parent element
  // React.Fragment gets rid of unnecessary extra divs
  render() {
    return(
    <React.Fragment>
      <span>{this.formatCounter()}</span>
      <button>Increment</button>
    </React.Fragment>);
  }

  formatCounter(){
      const { count } = this.state;

      // return count === 0 ? <h1>Zero</h1> : count;
      return count === 0 ? 'Zero' : count;
  }
}
