import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserProfile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com");
  const [reservations, setReservations] = useState([
    { id: 1, name: "Marty", date: "2023-10-01" },
    { id: 2, name: "Klausen Burger Brewery", date: "2023-10-05" },
    { id: 3, name: "Ginza Sushi", date: "2023-10-10" },
  ]);

  return (
    <div className="wrapper">
      <div className="profile">
        
        <div className="profile-element">
            <h2>User Profile</h2>
            <div className="form-element">
            <label>Email</label>
            <p>{email}</p>
            </div>
            <div className="reservations">
            <h3>Restaurant Reservations</h3>
            <ul>
                {reservations.map((reservation) => (
                <li key={reservation.id}>
                    {reservation.name} - {reservation.date}
                </li>
                ))}
            </ul>
            </div>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
        
      </div>
    </div>
  );
}

export default UserProfile;
