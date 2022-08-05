import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li><Link to='/about-us'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;