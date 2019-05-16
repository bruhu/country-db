import React, { Component } from "react";
import AppContext from "./AppContext";

export class CountryItem extends Component {
  render() {
    const { country } = this.props;
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {context => {
            return (
              <li key={country.alpha3Code} >
                <h4 onClick={context.selectCountryFunc}>{country.name}</h4>
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

{
  /* <li key={country.alpha3Code}>
          <h4>{country.name}</h4>
          <p>
            {country.subregion ? country.subregion : <span>No subregion</span>}
          </p>
        </li> */
}
