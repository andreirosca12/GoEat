import { Route, Routes } from "react-router-dom";
import RestaurantPageDisplay from "./restaurantPage";
import MainPage from "./mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/restaurantPage" element={<RestaurantPageDisplay />} />
    </Routes>
  );
}

export default App;
