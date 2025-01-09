import './SignUpRestaurant.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for API requests

function SignUpRestaurant() {
  const navigate = useNavigate();

  // Separate useState for each form input
  const [nume_restaurant, setName] = useState('');
  const [cui, setCui] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { nume_restaurant, cui, email, password };

    try {
      // Send POST request to register the restaurant
      const response = await axios.post("http://127.0.0.1:5000/add_restaurant", formData);
      if (response.status === 200) {
        console.log("Restaurant registered successfully:", response.data);
        navigate("/");  // Redirect to home after successful registration
      } else {
        console.error("Registration failed:", response.data);
      }
    } catch (error) {
      console.error("There was an error with the API request:", error);
    }
  };

  return (
    <div className="wrapper2">
      <form className="signup2" onSubmit={handleSubmit}>
        <h2>Inregistreaza-ti Restaurantul</h2>
        
        {/* Name field */}
        <div className="form-element">
          <label>Nume Restaurant</label>
          <input
            type="text"
            value={nume_restaurant}
            onChange={(e) => setName(e.target.value)}  // Update name state
            required
          />
        </div>

        {/* CUI field */}
        <div className="form-element">
          <label>Cod CUI</label>
          <input
            type="text"
            value={cui}
            onChange={(e) => setCui(e.target.value)}  // Update cui state
            required
          />
        </div>

        {/* Email field */}
        <div className="form-element">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update email state
            required
          />
        </div>

        {/* Password field */}
        <div className="form-element">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state
            required
          />
        </div>

        <button type="submit">
          Inregistreaza restaurant
        </button>
      </form>
    </div>
  );
}

export default SignUpRestaurant;
