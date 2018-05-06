import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import Resources from './resources/Resources';
import './app.css';

const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/resources" component={Resources} />
  </div>
);

export default App;
