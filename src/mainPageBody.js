import "./mainPageBody.css";
import { useNavigate } from "react-router-dom";
import martyFrontPage from "./assets/martyFrontPage.jpg";
import kalusenFront from "./assets/klausenFront.jpg";
import sushiFront from "./assets/sushiFront.jpg";
import formFront from "./assets/formFront.jpg";
import langos from "./assets/langos.jpg";

function MainPageBody() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="Body">
      <div className="background-container">
        <div className="search-box">
          <p className="search-text">
            Find your favorite restaurant and book it now!
          </p>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </div>
      <div className="content">
        <div className="row">
          <h2 className="sub-title">Recommended</h2>
          <div className="scrollable-list">
            <div className="image-container">
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPage")}
              >
                <div className="image_and_text">
                  <img src={martyFrontPage} alt="Marty Front Page" />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPageKlausen")}
              >
                <div className="image_and_text">
                  <img src={kalusenFront} alt="Klausen Front" />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/ginzaSushi")}
              >
                <div className="image_and_text">
                  <img src={sushiFront} alt="Sushi Front" />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/formCafe")}
              >
                <div className="image_and_text">
                  <img src={formFront} alt="Form Front" />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/langosKebab")}
              >
                <div className="image_and_text">
                  <img src={langos} alt="Langos" />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button">More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="sub-title">Near you</h2>
          <div className="scrollable-list">
            <div className="image-container">
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPage")}
              >
                <div className="image_and_text">
                  <img src={martyFrontPage} alt="Marty Front Page" />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPageKlausen")}
              >
                <div className="image_and_text">
                  <img src={kalusenFront} alt="Klausen Front" />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/ginzaSushi")}
              >
                <div className="image_and_text">
                  <img src={sushiFront} alt="Sushi Front" />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/formCafe")}
              >
                <div className="image_and_text">
                  <img src={formFront} alt="Form Front" />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/langosKebab")}
              >
                <div className="image_and_text">
                  <img src={langos} alt="Langos" />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button">More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="sub-title">Best rated</h2>
          <div className="scrollable-list">
            <div className="image-container">
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPage")}
              >
                <div className="image_and_text">
                  <img src={martyFrontPage} alt="Marty Front Page" />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/restaurantPageKlausen")}
              >
                <div className="image_and_text">
                  <img src={kalusenFront} alt="Klausen Front" />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/ginzaSushi")}
              >
                <div className="image_and_text">
                  <img src={sushiFront} alt="Sushi Front" />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/formCafe")}
              >
                <div className="image_and_text">
                  <img src={formFront} alt="Form Front" />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => handleNavigation("/langosKebab")}
              >
                <div className="image_and_text">
                  <img src={langos} alt="Langos" />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageBody;
