import "./mainPageBody.css";
import { useNavigate } from "react-router-dom";

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
            Find your favorite restaurant and book it now !
          </p>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </div>
      <div className="content">
        <div className="row">
          <h2 className="sub-title">Recomanded </h2>
          <div className="scrollable-list">
            <div className="image-container">
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/restaurantPage");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/CROP2-TAZZ-3000x2000_2.jpg"
                    alt="Image 1"
                  />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/restaurantPageKlausen");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/web2020_11_KlausenBurger_CatalinHladi-1829.jpg"
                    alt="Image 2"
                  />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/ginzaSushi");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/PONZU_SAKE_NIGIRI_BOX_MEDIUM_1.jpg"
                    alt="Image 3"
                  />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/formCafe");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/FC-tazz-cover.png"
                    alt="Image 4"
                  />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/langosKebab");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/96d9bbb4c70a136d48574a25bc39ba48.jpg"
                    alt="Image 5"
                  />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button"> More </button>
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
                onClick={() => {
                  navigate("/restaurantPage");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/CROP2-TAZZ-3000x2000_2.jpg"
                    alt="Image 1"
                  />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/restaurantPageKlausen");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/web2020_11_KlausenBurger_CatalinHladi-1829.jpg"
                    alt="Image 2"
                  />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/ginzaSushi");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/PONZU_SAKE_NIGIRI_BOX_MEDIUM_1.jpg"
                    alt="Image 3"
                  />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/formCafe");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/FC-tazz-cover.png"
                    alt="Image 4"
                  />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/langosKebab");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/96d9bbb4c70a136d48574a25bc39ba48.jpg"
                    alt="Image 5"
                  />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button"> More </button>
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
                onClick={() => {
                  navigate("/restaurantPage");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/CROP2-TAZZ-3000x2000_2.jpg"
                    alt="Image 1"
                  />
                  <p className="image-text">Marty</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/restaurantPageKlausen");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/web2020_11_KlausenBurger_CatalinHladi-1829.jpg"
                    alt="Image 2"
                  />
                  <p className="image-text">Klausen Burger Brewery</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/ginzaSushi");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/PONZU_SAKE_NIGIRI_BOX_MEDIUM_1.jpg"
                    alt="Image 3"
                  />
                  <p className="image-text">Ginza Sushi</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/formCafe");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/FC-tazz-cover.png"
                    alt="Image 4"
                  />
                  <p className="image-text">Form Cafe</p>
                </div>
              </button>
              <button
                className="image_and_text_button"
                onClick={() => {
                  navigate("/langosKebab");
                }}
              >
                <div className="image_and_text">
                  <img
                    src="https://tazzcdn.akamaized.net/uploads/cover/96d9bbb4c70a136d48574a25bc39ba48.jpg"
                    alt="Image 5"
                  />
                  <p className="image-text">Langos & Kebab</p>
                </div>
              </button>
              <div className="square-button">
                <button className="square-button"> More </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageBody;
