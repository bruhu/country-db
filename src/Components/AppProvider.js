import React from "react";
import AppContext from "./AppContext";

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      
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
