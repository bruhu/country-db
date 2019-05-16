import React from "react";
import AppContext from "./AppContext";

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectCountry: {},
      selectCountryFunc: e => {
        // innerText = the country name in countryItem
        const clickedCountry = e.target.innerText;
        const filter = this.state.data.filter(
          country => country.name === clickedCountry
        );
        this.setState({ selectCountry: filter[0] });
      }
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
