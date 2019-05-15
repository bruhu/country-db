import React from "react";
import AppContext from "./AppContext";

export default class AppProvider extends React.Component {
  // constructor + state come here, but you need constructorrororo

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
