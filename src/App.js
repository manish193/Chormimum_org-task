import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <h3>Sample Diagnostics App </h3><br/>
    <Link to="/">System Data</Link>
    <Link to="/diagnostic_manager">System Diagnostic Manager</Link>
    <Link to="/system_state">System State</Link>
    
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <p className="page-info">
      {props.title}
    </p>
    
  </div>
);

const SystemData = () => (
  <Template title="System Data" status="SystemData"/>
);

const SystemDiagnosticManager = () => (
  <Template title="System Diagnostic Manager" status="SystemDiagnosticManager"/>
);
const SystemState = () => (
  <Template title="System State" status="SystemState"/>
);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={SystemData}/>
          <Route path="/diagnostic_manager" component={SystemDiagnosticManager}/>
          <Route path="/system_state" component={SystemState}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;