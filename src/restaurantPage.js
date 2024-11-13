import React from 'react';
import { useNavigate } from 'react-router-dom';
import './restaurantPage.css';

function RestaurantPage() {
  const navigate = useNavigate();

  return (
    <div className="restaurant-page">
      <h1>Marty</h1>
      <button className="booking-button">Book Now</button>
      <div className="schedule">
        <h2>Orar</h2>
        <p>Luni - Vineri: 10:00 - 22:00</p>
        <p>Sâmbătă - Duminică: 12:00 - 24:00</p>
      </div>
      <div className="menu">
        <h2>Meniu</h2>
        <ul>
          <li>Pizza Margherita - 25 RON</li>
          <li>Spaghetti Carbonara - 30 RON</li>
          <li>Salată Caesar - 20 RON</li>
        </ul>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}

export default RestaurantPage;