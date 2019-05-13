import React, { Component } from "react";
import "./CountryListSidebar.css";
import CountryItem from "./CountryItem";

export class CountryListSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <CountryItem />
          </li>
          <li>
            <CountryItem />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default CountryListSidebar;
