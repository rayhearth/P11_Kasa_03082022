import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/home'>Accueil</Link></li>
                        <li><Link to='/about-us'>A Propos</Link></li>
                    </ul>
                </nav>
            </header>

        </div>
    );
};

export default Header;