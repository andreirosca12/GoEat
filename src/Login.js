import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");  // State for email
    const [password, setPassword] = useState("");  // State for password
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:5000/login", {
                email: email,
                password: password,
            });

            if (response.status === 200)
            {
                alert(response.message);
                if (response.user.isAdmin === "1") {
                    localStorage.setItem("admin", JSON.stringify(response.user));  // Store user data in local storage
                    navigate("/admin");  // Redirect to home page or login page
                }
                else{
                    localStorage.setItem("client", JSON.stringify(response.user));  // Store user data in local storage
                    navigate("/");  // Redirect to home page or login page
                }
            }
            if(response.status === 201) {
                alert(response.message);
                localStorage.setItem("restaurant", JSON.stringify(response.restaurant));  // Store user data in local storage
                navigate("/");  // Redirect to home page or login page
            }
        } catch (error) {
            // Handle error (e.g., duplicate email or server error)
            alert(error.response.message);
        }
    };

    return (
        <div className="wrapper">
            <form className="login" onSubmit={(event) => event.preventDefault()}>
                <h2>Login</h2>
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
                <button 
                    type="button" 
                    onClick={handleSignUp}  // Call handleSignUp on button click
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
