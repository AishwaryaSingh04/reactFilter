import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import LandingComponent from "./components/landingComponent";
import AddEmployee from "./components/addEmployee";
import DisplayEmployee from "./components/displayEmployee";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="header-wrapper col-md-12 d-flex justify-content-center">
            Header
          </header>
          <div class="tab-panel">
            <Router>
              <nav>
                <NavLink to="/landing">Landing Component</NavLink>
                <NavLink to="/add">Component1</NavLink>
                <NavLink to="/display">Component2</NavLink>
              </nav>
              <Switch>
                <Route path="/landing" component={LandingComponent} />
                <Route path="/add" component={AddEmployee} />
                <Route path="/display" component={DisplayEmployee} />
              </Switch>
            </Router>
          </div>
          <footer className="footer-wrapper col-md-12 d-flex justify-content-center">
            Footer
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
