import React from 'react';
import { Link } from 'react-router-dom';
import './mainPageBody.css';

function MainPageBody() {
  return (
    <div className="Body">
      <input type="text" className="search-bar" placeholder="Search..." />
      <Link to="/restaurant">
        <button className="go-to-restaurant">Go to Restaurant</button>
      </Link>
    </div>
  );
}

export default MainPageBody;