import React, { Component } from "react";
import "./CountryDisplay.css";
import AppContext from "./AppContext";
export class CountryDisplay extends Component {
  render() {
    return (
      <div className="country-display">
        <div className="country-display-container" key={this.props.index}>
          <AppContext.Consumer>
            {context => {
              return (
                <div className="country-disp-text">
                  <h3>{context.selectCountry.name}</h3>
                  <p>
                    {context.selectCountry.region} -
                    {context.selectCountry.subregion}
                  </p>
                  <p>
                    DE:{" "}
                    {context.selectCountry.translation &&
                      context.selectCountry.translations.de}
                  </p>
                  <p>
                    IT:{" "}
                    {context.selectCountry.translation &&
                      context.selectCountry.translations.it}
                  </p>
                  <p>
                    ES:{" "}
                    {context.selectCountry.translation &&
                      context.selectCountry.translations.es}
                  </p>
                  <div>
                    {context.selectCountry.flag && (
                      <img
                        src={context.selectCountry.flag}
                        className="country-disp-img"
                        key={this.props.index}
                        alt="country flag"
                      />
                    )}
                  </div>
                </div>
              );
            }}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}

export default CountryDisplay;
