import React, { Component } from "react";
import "./Sidebar.css";
import CountryItem from "./CountryItem";
import AppContext from "./AppContext";

export class CountryListSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-list-container">
          <ul>
            <AppContext.Consumer>
              {context =>
                context.data &&
                context.data.map((country, index) => (
                  <CountryItem country={country} key={index} />
                ))
              }
            </AppContext.Consumer>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryListSidebar;