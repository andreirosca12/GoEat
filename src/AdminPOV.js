import "./AdminPOV.css";
import { useState } from "react";
import martyFrontPage from "./assets/martyFrontPage.jpg";
import kalusenFront from "./assets/klausenFront.jpg";
import sushiFront from "./assets/sushiFront.jpg";
import formFront from "./assets/formFront.jpg";
import langos from "./assets/langos.jpg";
import client from "./assets/icons8-client-50.png";

function AdminPOV() {
  const [clientRequests, setClientRequests] = useState([
    { id: 1, name: "Client 1", image: client },
    { id: 2, name: "Client 2", image: client },
    { id: 3, name: "Client 3", image: client },
    { id: 4, name: "Client 4", image: client },
    { id: 5, name: "Client 5", image: client },
  ]);

  const [restaurantRequests, setRestaurantRequests] = useState([
    { id: 1, name: "Restaurant 1", image: martyFrontPage },
    { id: 2, name: "Restaurant 2", image: kalusenFront },
    { id: 3, name: "Restaurant 3", image: sushiFront },
    { id: 4, name: "Restaurant 4", image: formFront },
    { id: 5, name: "Restaurant 5", image: langos },
  ]);

  
  const handleDeleteClient = (id) => {
    setClientRequests(clientRequests.filter((client) => client.id !== id));
  };

  const handleDeleteRestaurant = (id) => {
    setRestaurantRequests(restaurantRequests.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1>ADMIN</h1>
      <div className="content-box-containerA">
        <div className="content-boxA">
          <h2 className="sub-titleA">Client Account Deletion</h2>
          <div className="scrollable-listA">
            {clientRequests.map((client) => (
              <div className="image-containerA" key={client.id}>
                <button className="image_and_text_buttonA" onClick={() => handleDeleteClient(client.id)}>
                  <div className="image_and_textA">
                    <img src={client.image} alt={client.name} />
                    <p className="image-textA">{client.name}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="content-boxA">
          <h2 className="sub-titleA">Restaurant Account Deletion</h2>
          <div className="scrollable-listA">
            {restaurantRequests.map((restaurant) => (
              <div className="image-containerA2" key={restaurant.id}>
                <button className="image_and_text_buttonA" onClick={() => handleDeleteRestaurant(restaurant.id)}>
                  <div className="image_and_textA">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <p className="image-textA">{restaurant.name}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPOV;