import "./Header.css";
import logoGoEat from "./GoeatLogo.png";
import profile from "./profile.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Use useState for loggedIn state
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Fetch user data on component mount
  useEffect(() => {
    // Check localStorage for a "login" key to determine if the user is logged in
    if (localStorage.getItem("client")||localStorage.getItem("restaurant")) {
      setLoggedIn(true); // User is logged in
    } else {
      setLoggedIn(false); // User is not logged in
    }
  }, []); // Empty array ensures this runs only once on component mount

  const logout = async() => {
    localStorage.removeItem("restaurant");
    localStorage.removeItem("client");
    setLoggedIn(false);
    const response = await axios.post("http://127.0.0.1:5000/logout", {
      id: 1
    });
  }
  return (
    <header className="header">
      <img src={logoGoEat} width="100px" height="100px" alt="GoEat Logo" />
      <div className="right-container">
        <ul>
          {!loggedIn &&(<li>
            <Link to="/SignUpRestaurant">Inregistreaza-ti restaurantul</Link>
          </li>)}
          {loggedInAdmin && (
            <li>
              <Link to="/AdminPOV">Admin</Link>
            </li>
          )}
        </ul>

        <div
          className="profile-dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="profile">
            <img src={profile} width="50px" height="50px" alt="Profile" />
            <span className="dropdown-arrow">▼</span>
          </div>
          {dropdownVisible && (
            <div className="profile-dropdown2">
              <ul>
                {loggedIn ? (
                  <>
                    <li>
                      <Link to="/UserProfile">Profil</Link>
                    </li>
                    <li>
                      <button onClick={() => logout()}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signup">Creaza Cont</Link>
                    </li>
                    <li>
                      <Link to="/login">Autentificare</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

