import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CountryListSidebar from "./Components/CountryListSidebar";
import CountryDisplay from "./Components/CountryDisplay";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null // in some cases may be better to put [] instead of null
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="country-components-container">
          <CountryListSidebar data={this.state.data}/>
          <CountryDisplay />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
