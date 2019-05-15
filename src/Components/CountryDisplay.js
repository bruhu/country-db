import React, { Component } from "react";
import "./CountryDisplay.css";
export class CountryDisplay extends Component {
  render() {
    return (
      <div className="country-display">
        
          {this.props.data &&
            this.props.data.map((country, index) => (
              <div className="country-display-container">
              <div key={index} className="country-disp-text">
                <h3>{country.name}</h3>
                <p>
                  {country.region} - {country.subregion}
                </p>
                <p>DE: {country.translations.de}</p>
                <p>IT: {country.translations.it}</p>
                <p>ES: {country.translations.es}</p>
                <div >
                  <img src={country.flag} className="country-disp-img" />
                </div>
              </div>
              </div>
            ))}
        </div>
        
    );
  }
}

export default CountryDisplay;
