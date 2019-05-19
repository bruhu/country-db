import React, { Component } from "react";
import AppContext from "./AppContext";
import "./CountryItem.css";

export class CountryItem extends Component {
  render() {
    const { country } = this.props;
    let filteredCountries = this.props.countries;
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {context => {
            return (
              <li key={country.alpha3Code}>
                <h4
                  onClick={context.selectCountryFunc}
                  className="sidebar-countryname"
                >
                  {country.name}
                </h4>
                <p>
                  {country.subregion ? (
                    country.subregion
                  ) : (
                    <span>No subregion</span>
                  )}
                </p>
              </li>
            );
          }}
        </AppContext.Consumer>
      </React.Fragment>
    );
  }
}

export default CountryItem;
