import React from 'react';
import { Link } from 'react-router-dom'
import logo_o from '@/assets/images/logo_o.svg'


// import './Header.css'

const Header = () => {
    return (
        <header className='pHeader'>
            <nav className='headerNav'>
                <div className='headerLogo'>
                    <Link to='/'>
                        <img src={logo_o} alt='logo kasa'/>
                    </Link>
                </div>
                <ul className='headerMenu'>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li><Link to='/about-us'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;