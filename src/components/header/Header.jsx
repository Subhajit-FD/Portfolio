import React, { useState } from 'react'
import "./header.css";
const Header = (props) => {
    // Toggle Menu 
    const[Toggle, showMenu] = useState(false);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">SUBHAJIT</a>
            
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">


                        <li className="nav__items">
                            <a href="#home" className="nav__links active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#about" className="nav__links">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#skills" className="nav__links">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#services" className="nav__links">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        {/* <li className="nav__items">
                            <a href="#portfolio" className="nav__links">
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li> */}

                        <li className="nav__items">
                            <a href="#contact" className="nav__links">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                   
                <label className="switch">
                    <input type="checkbox" checked={props.isDarkMode} onChange={props.onDarkModeToggle} />
                    <span className="slider"></span>
                 </label>
                
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
