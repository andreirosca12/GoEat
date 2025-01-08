import "./Header.css";
import logoGoEat from "./GoeatLogo.png";
import profile from "./profile.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <header className="header">
      <img src={logoGoEat} width="100px" height="100px" />
      <div className="right-container">
        <ul>
          <li>
            <Link to="/SignUpRestaurant">Inregistreaza-ti restaurantul</Link>
          </li>
          <li>
            <Link to="/AdminPOV">Admin</Link>
          </li>
        </ul>
        <div
          className="profile-dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="profile">
            <img src={profile} width="50px" height="50px"></img>
            <span className="dropdown-arrow">▼</span>
          </div>
          {dropdownVisible && (
            <div className="profile-dropdown2">
              <ul>
                <li>
                  <Link to="/login">Creaza Cont</Link>
                </li>
                <li>
                  <Link to="/login">Autentificare</Link>
                </li>
                <li>
                  <Link to="/UserProfile">Profil</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
