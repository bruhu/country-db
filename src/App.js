import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import CountryListSidebar from "./Components/CountryListSidebar";
import CountryDisplay from "./Components/CountryDisplay";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="country-components-container">
        <CountryListSidebar />
        <CountryDisplay />
      </div>
    </React.Fragment>
  );
}

export default App;
