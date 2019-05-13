import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <input
            type="search"
            className="country-search-input"
            placeholder="Search"
          />
          <div className="dropdown">
            <button className="dropbtn">Language: EN</button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
