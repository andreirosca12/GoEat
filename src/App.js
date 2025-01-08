import { Route, Routes } from "react-router-dom";
import RestaurantPageDisplayed from "./restaurantPageDisplayed";
import RestaurantPageDisplayedKlausen from "./restaurantPageDisplayedKlausen";
import FormCafeDisplayed from "./formCafeDisplayed";
import GinzaSushiDisplayed from "./ginzaSushiDisplayed";
import LangosKebabDisplayed from "./langosKebabDisplayed";
import MainPage from "./mainPage";
import Login from "./Login";
import SignUpRestaurant from "./SignUpRestaurant";
import UserProfile from "./UserProfile";
import AdminPOV from "./AdminPOV";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUpRestaurant" element={<SignUpRestaurant />} />
      <Route path="/restaurantPage" element={<RestaurantPageDisplayed />} />
      <Route
        path="/restaurantPageKlausen"
        element={<RestaurantPageDisplayedKlausen />}
      />
      <Route path="/formCafe" element={<FormCafeDisplayed />} />
      <Route path="/ginzaSushi" element={<GinzaSushiDisplayed />} />
      <Route path="/langosKebab" element={<LangosKebabDisplayed />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/AdminPOV" element={<AdminPOV />} />
    </Routes>
  );
}

export default App;
