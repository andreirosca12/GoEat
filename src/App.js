import { Route, Routes } from "react-router-dom";
import RestaurantPageDisplayed from "./restaurantPageDisplayed";
import RestaurantPageDisplayedKlausen from "./restaurantPageDisplayedKlausen";
import FormCafeDisplayed from "./formCafeDisplayed";
import GinzaSushiDisplayed from "./ginzaSushiDisplayed";
import LangosKebabDisplayed from "./langosKebabDisplayed";
import MainPage from "./mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/restaurantPage" element={<RestaurantPageDisplayed />} />
      <Route path="/restaurantPageKlausen" element={<RestaurantPageDisplayedKlausen />} />
      <Route path="/formCafe" element={<FormCafeDisplayed />} />
      <Route path="/ginzaSushi" element={<GinzaSushiDisplayed />} />
      <Route path="/langosKebab" element={<LangosKebabDisplayed />} />
    </Routes>
  );
}

export default App;
