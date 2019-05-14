import React, { Component } from "react";
import "./CountryListSidebar.css";
import CountryItem from "./CountryItem";

export class CountryListSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-list-container">
          <ul>
            {/* inside of ul do a map that iterates over data and renders a li */}
            <li>
              <CountryItem />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryListSidebar;
