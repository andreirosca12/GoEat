import './Login.css'
function Login()
{
    return(
        <div className="wrapper">
            <form className="login">
                <h2>Login</h2>
                <div className="form-element">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;