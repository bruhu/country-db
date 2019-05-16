import React, { Component } from "react";
import "./CountryDisplay.css";
import AppContext from "./AppContext";
export class CountryDisplay extends Component {
  render() {
    return (
      <div className="country-display">
        <AppContext.Consumer>
          {context => {
            return (
              context.data &&
              context.data.map((country, index) => (
                <div className="country-display-container" key={index}>
                  <AppContext.Consumer>
                    {context => {
                      return (
                        <div className="country-disp-text">
                          <h3>{context.selectCountry.name}</h3>
                          <p>
                            {context.selectCountry.region} -{" "}
                            {context.selectCountry.subregion}
                          </p>
                          {/* <p>DE: {context.selectCountry.translations.de}</p>
                          <p>IT: {context.selectCountry.translations.it}</p>
                          <p>ES: {context.selectCountry.translations.es}</p> */}
                          <div>
                            <img
                              src={context.selectCountry.flag}
                              className="country-disp-img"
                              key={index}
                              alt="country flag"
                            />
                          </div>
                        </div>
                      );
                    }}
                  </AppContext.Consumer>
                </div>
              ))
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default CountryDisplay;
