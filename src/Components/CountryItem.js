import React, { Component } from "react";

export class CountryItem extends Component {
  render() {
    return (
      <React.Fragment>
        {/* issue was - bc no change of state, no re-render, so fetch wasn't happening and there was no information to get! */}
        {this.props.data &&
          this.props.data.map((country, index) => (
            <li key={index}>
              <h4>{country.name}</h4>
              <p>{country.subregion}</p>
            </li>
          ))}
      </React.Fragment>
    );
  }
}

export default CountryItem;
