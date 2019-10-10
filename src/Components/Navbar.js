import React, { Component } from "react";
import "./Navbar.css";
import AppContext from "./AppContext";
export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <AppContext.Consumer>
            {context => {
              return (
                <input
                  type="search"
                  className="country-search-input"
                  placeholder="Search"
                  onChange={e => context.filterFunc(e.target.value)}
                />
              );
            }}
          </AppContext.Consumer>
          {/* <div className="dropdown">
            <button className="dropbtn">Language: EN</button>
          </div> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
