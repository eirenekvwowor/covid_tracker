/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Global from "./pages/Global";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";

const App = () => {
  return (
    <div className="App">
        <h1>Covid19 Tracker</h1>
        <Router>
          <div>
            <nav>
            <ul>
              <li>
                <Link to="/global">Global</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/provinsi">Provinsi</Link>
              </li>
            </ul>
            </nav>
          <Switch>
            <Route path="/global">
            <Global />
            </Route> 
            <Route path="/indonesia">
            <Indonesia />
            </Route>
            <Route path="/provinsi">
            <Provinsi />
            </Route>
          </Switch>
          </div>
        </Router>
    </div>
  );
};

export default App;

