import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState("");  // State for email
    const [password, setPassword] = useState("");  // State for password
    const [isAdmin, setIsAdmin] = useState(false);  // State for is_admin (default to false)
    const navigate = useNavigate();

    const handleSignUp = async () => {
        // Basic validation
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/add_user", {
                email: email,
                password: password,
                is_admin: isAdmin  
            });

            if (response.status === 201) {
                alert(response.data.message);
                navigate("/");  // Redirect to home page or login page
            }
        } catch (error) {
            // Handle error (e.g., duplicate email or server error)
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="wrapper">
            <form className="login" onSubmit={(event) => event.preventDefault()}>
                <h2>SignUp</h2>
                <div className="form-element">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-element">
                    <label>Is Admin</label>
                    <input 
                        type="checkbox" 
                        checked={isAdmin} 
                        onChange={(e) => setIsAdmin(e.target.checked)} 
                    />
                </div>
                <button 
                    type="button" 
                    onClick={handleSignUp}  // Call handleSignUp on button click
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
