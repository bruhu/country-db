import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CountryDisplay from "./Components/CountryDisplay";
import AppProvider from "./Components/AppProvider";

export class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ data }))
  //     .catch(error => console.error);
  // }

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

// render() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <div className="country-components-container">
//         <CountryListSidebar data={this.state.data} />
//         <CountryDisplay data={this.state.data}/>
//       </div>
//     </React.Fragment>
//   );
// }

export default App;

