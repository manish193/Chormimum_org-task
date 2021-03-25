import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import System from './System.js';
import {Button} from "@material-ui/core";

const NavBar = () => (
  <div className="navbar">
    <h3>Sample Diagnostics App </h3><br/>
    <Button onClick ={() => {window.parent.location = window.parent.location.href;}} variant="outlined"><Link to="/">System Data</Link></Button>
    <Button variant="outlined"><Link to="/diagnostic_manager">System Diagnostic Manager</Link></Button>
    <Button variant="outlined"><Link to="/system_state">System State</Link></Button>
    
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <ul><h3 className="page-info">
      {props.title}
    </h3>
    </ul>    
  </div>
);

const SystemData = () => (
  <div>
      <Template title="System Data" status="SystemData"/>
      <System/>
  </div>
);

const SystemDiagnosticManager = () => (
  <Template title="System Diagnostic Manager" status="SystemDiagnosticManager"/>
);
const SystemState = () => (
  <div>
  <Template title="System State" status="SystemState"/>
  
  </div>
);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" component={SystemData}/>
          <Route path="/diagnostic_manager" component={SystemDiagnosticManager}/>
          <Route path="/system_state" component={SystemState}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;