import React, { Component } from "react";
import "./CountryListSidebar.css";
import CountryItem from "./CountryItem";

export class CountryListSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-list-container">
          <ul>
            {/* issue was - bc no change of state, no re-render, so fetch wasn't happening and there was no information to get! */}
            {this.props.data &&
              this.props.data.map((country, index) => (
                <li key={index}>Hello, {country.name}</li>
              ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryListSidebar;
