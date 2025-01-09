import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com");
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations from API
    const storedEmail = localStorage.getItem("client");
    if (storedEmail) {
      // Parse the stored email (assuming it's stored as JSON)
      setEmail(JSON.parse(storedEmail).email);
    }

    const fetchReservations = async () => {
      try {
        let response;
        if(localStorage.getItem("client")) {
          response = await axios.post("http://127.0.0.1:5000/get_reservations_u", {
          id: 1
        });
        }
        if(localStorage.getItem("restaurant")) {
          response = await axios.post("http://127.0.0.1:5000/get_reservations_r", {
          id: 1
        });
        }


        // Check if the response has 'reservations' and ensure it's an array
        if (Array.isArray(response.data.reservations)) {
          setReservations(response.data.reservations);
        } else {
          setReservations([]); // If not an array, set an empty array
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchReservations();
  }, []);

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
            {reservations && reservations.length > 0 ? (
              <ul>
                {reservations.map((reservation) => (
                  <li key={reservation.id}>
                    {reservation.nume_restaurant}-{reservation.reservation_date}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reservations found.</p>
            )}
          </div>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
