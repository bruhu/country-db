import React, { Component } from "react";
import "./CountryDisplay.css";
import AppContext from "./AppContext";
export class CountryDisplay extends Component {
  render() {
    return (
      <div className="country-display">
      
        <AppContext.Consumer>
          {context => {

            

            return(
              context.data &&
                context.data.map((country, index) => (
                  
                  <div className="country-display-container" key={index}>
                    <div className="country-disp-text">
                      <h3>{country.name}</h3>
                      <p>
                        {country.region} - {country.subregion}
                      </p>
                      <p>DE: {country.translations.de}</p>
                      <p>IT: {country.translations.it}</p>
                      <p>ES: {country.translations.es}</p>
                      <div>
                        <img
                          src={country.flag}
                          className="country-disp-img"
                          key={index}
                          alt="country flag"
                        />
                      </div>
                    </div>
                  </div>
                ))
            )              
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default CountryDisplay;
