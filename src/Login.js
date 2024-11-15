import './Login.css'
import { useNavigate } from "react-router-dom";
function Login()
{
    const navigate = useNavigate();
    return(
        <div className="wrapper">
            <form className="login" onSubmit={(event) => {
            event.preventDefault();
            console.log('Form submitted!');
            navigate("/");
            }}>
                <h2>Login</h2>
                <div className="form-element">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <button type="submit">
                Login
                </button>
            </form>
        </div>
    )
}
export default Login;