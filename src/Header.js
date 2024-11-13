import './Header.css'
import logoGoEat from './GoeatLogo.png';
import profile from './profile.png';

function Header()
{
    return(
        <header className="header">
            <img src={logoGoEat} width='100px' height='100px'/>
            <ul>
                <li><a href='#'>Inregistreaza-ti Restaurantul</a></li>
                <li><a href='#'>Catalog</a></li>
            </ul>
            <div className="profile-dropdown">
                <img src={profile} width='50px' height='50px'></img>
                <span className="dropdown-arrow">▼</span>
            </div>
        </header>
    )
}
export default Header; 