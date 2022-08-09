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
                    <Link to='/home' className={(nav) => (nav.isActive ? 'nav-active':'')}><li>Accueil</li></Link>
                    <Link to='/about-us' className={(nav) => (nav.isActive ? 'nav-active':'')}><li>A Propos</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;