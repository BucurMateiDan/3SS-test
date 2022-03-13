import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import MoviesByCategory from './pages/MoviesByCategory';
import AssetDetails from './pages/AssetDetails';
import Popular from './pages/Popular';

function App() {

  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' component={Categories} />
          <Route path='/movies' component={MoviesByCategory} />
          <Route path='/asset' component={AssetDetails} />
          <Route path='/popular' component={Popular} />
        </Switch>
    </Router>

  );
}

export default App;
