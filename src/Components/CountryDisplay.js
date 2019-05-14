import React, { Component } from "react";
import "./CountryDisplay.css";
export class CountryDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-display-container">
          <div className="country-disp-text">
            <h3>name</h3>
            <p>region - subregion</p>
            <p>translations.de</p>
            <p>translations.it</p>
          </div>
          <div className="country-disp-img">
            <div className="flag-container">flag</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryDisplay;
