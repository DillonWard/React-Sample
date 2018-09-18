import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  // wrap in a <div> because babel can only render 1 element at a time
  // wrapping it in a div can wrap multiple elements inside 1 - need a parent element
  // React.Fragment gets rid of unnecessary extra divs
  render() {

    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // append to the end of classes - if the counter is 0 append 'warning' otherwise append 'primary'
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;

    // return count === 0 ? <h1>Zero</h1> : count;
    return value === 0 ? "Zero" : value;
  }
}
