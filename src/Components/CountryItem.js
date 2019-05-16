import React, { Component } from "react";

export class CountryItem extends Component {
  render() {
    const { country } = this.props;

    return (
      <React.Fragment>
        {
          <li key={country.alpha3Code}>
            <h4>{country.name}</h4>
            <p>{country.subregion ? country.subregion : <p>No subregion</p>}</p>
          </li>
        }
      </React.Fragment>
    );
  }
}

export default CountryItem;
