import './Header.css'
import logoGoEat from './GoeatLogo.png';
import profile from './profile.png';
import { useState } from 'react';

function Header()
{
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    return(
        <header className="header">
            <img src={logoGoEat} width='100px' height='100px'/>
            <div className="right-container">
                <ul>
                    <li><a href='#'>Inregistreaza-ti Restaurantul</a></li>
                    <li><a href='#'>Catalog</a></li>
                </ul>
                <div className="profile-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <div className="profile">
                        <img src={profile} width='50px' height='50px'></img>
                        <span className="dropdown-arrow">▼</span>
                    </div>
                {dropdownVisible && (
                    <div className="profile-dropdown2">
                        <ul>
                            <li><a href='#'>Creaza Cont</a></li>
                            <li><a href='#'>Autentificare</a></li>
                        </ul>
                    </div>
                )}
                </div>

            </div>
        </header>
    )
}
export default Header;