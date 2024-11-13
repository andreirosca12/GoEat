import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPageBody from './mainPageBody';
import RestaurantPage from './restaurantPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPageBody />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;