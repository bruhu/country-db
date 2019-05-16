import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CountryDisplay from "./Components/CountryDisplay";
import AppProvider from "./Components/AppProvider";

export class App extends React.Component {
  
  render() {
    return (
      <AppProvider>
        <React.Fragment>
          <Navbar />
          <div className="country-components-container">
            <Sidebar />
            <CountryDisplay />
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

export default App;

