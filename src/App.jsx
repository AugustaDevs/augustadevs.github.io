import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import './app.css';

const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
