import './SignUpRestaurant.css';
import { useNavigate } from "react-router-dom";
function SignUpRestaurant()
{
    const navigate = useNavigate();
    return(
        <div className="wrapper2">
            <form className="signup2" onSubmit={(event) => {
            event.preventDefault();
            console.log('Form submitted!');
            navigate("/");
            }}>
                <h2>Inregistreaza-ti Restaurantul</h2>
                <div className="form-element">
                    <label>Nume Restaurant</label>
                    <input type="text"></input>
                </div>
                <div className="form-element">
                    <label>Cod CUI</label>
                    <input type="text"></input>
                </div>
                <div className="form-element">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <button type="submit">
                Inregistreaza restaurant
                </button>
            </form>
        </div>
    )
}
export default SignUpRestaurant;