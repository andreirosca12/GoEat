import './Header.css'
import logo from './logo.svg';
function Header()
{
    return(
        <header className="header">
            <img src={logo} width='100px' height='100px'/>
            <a href='#'>Profile</a>
        </header>
    )
}
export default Header;