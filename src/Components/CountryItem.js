import React, { Component } from "react";
import { classExpression } from "@babel/types";

export class CountryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
      // in some cases may be better to put [] instead of null
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <React.Fragment>
        <h4>Country Name</h4>
        <p>Subregion</p>
      </React.Fragment>
    );
  }
}

export default CountryItem;
