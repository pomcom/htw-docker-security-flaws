import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

const Header = (props) => {


    const [profile, setProfile] = useState([]);

    const logout = () => {
        props.onLogout();
    }
    return (
        <header className="after-login">
            <div className="menu-container">
                {/* <img className="logo" alt='Logo' src={image}/> */}
                <h2><NavLink className="nav-link text-light" to={'/landingPage'}>Gardeningstore</NavLink></h2>
                <nav className="menu">
                    <ul className="nav">
                        <li className="nav-item"><NavLink className="nav-link text-light" to={'/landingPage'} >Homes</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to={'/profile/1'} >Profile</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-light" to={'/'} onClick={logout} >Logout</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link text-light" to={'/profile/1'} >My Shopping Cart: 0{/*profile.cartProducts*/}</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;