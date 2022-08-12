import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='pHeader'>
            <nav className='headerNav'>
                <div className='headerLogo'>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/img/logo_o.svg'} alt='logo kasa'/>
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