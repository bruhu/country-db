import React, { Component } from "react";
import "./CountryListSidebar.css";
import CountryItem from "./CountryItem";

export class CountryListSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-list-container">
          <ul>
            <CountryItem data={this.props.data} />
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryListSidebar;
