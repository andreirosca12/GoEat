import { Route, Routes } from "react-router-dom";
import RestaurantPageDisplayed from "./restaurantPageDisplayed";
import MainPage from "./mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/restaurantPage" element={<RestaurantPageDisplayed />} />
    </Routes>
  );
}

export default App;
