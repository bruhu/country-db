import React, { Component } from "react";
import "./CountryDisplay.css";
export class CountryDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-display-container">
          <div className="country-disp-text">
            <h3>Country Name</h3>
            <p>region - subregion</p>
            <p>Translations</p>
            <p>Translations</p>
          </div>
          <div className="country-disp-img">
            <div className="flag-container">Flag</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryDisplay;
