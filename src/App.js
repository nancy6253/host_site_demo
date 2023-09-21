import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DummyFile from './components/dummyFile';

function App() {
  return (
    <Router baseName='/host-site'>

      <Route path='/:path(|home)'>
        <DummyFile />
      </Route>

    </Router>


  );
}

export default App;
