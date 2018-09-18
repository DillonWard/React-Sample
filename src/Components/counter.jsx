import React, { Component } from "react";

export default class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
      fontSize: '10px',
      fontWeight: 'bold'
    };

  // wrap in a <div> because babel can only render 1 element at a time
  // wrapping it in a div can wrap multiple elements inside 1 - need a parent element
  // React.Fragment gets rid of unnecessary extra divs
  render() {

    return(
    <React.Fragment>
      <span style = { this.styles } className={this.getBadgeClasses()}>{this.formatCounter()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>    
    </React.Fragment>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // append to the end of classes - if the counter is 0 append 'warning' otherwise append 'primary'
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCounter(){
      const { count } = this.state;

      // return count === 0 ? <h1>Zero</h1> : count;
      return count === 0 ? 'Zero' : count;
  }
}
