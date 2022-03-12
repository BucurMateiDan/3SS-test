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
  
//   useEffect(() => {
//     // GET request using fetch inside useEffect React hook
//     fetch('https://video-proxy.3rdy.tv/api/vod/asset/516486/videos')
//         .then((response) => {
//           console.log(response);
//           response.json().then((data) => {
//               console.log(data);
//           });
//       });
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

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
