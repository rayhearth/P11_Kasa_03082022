import React from 'react';
import { Link } from 'react-router-dom';
import logo_w from '@/assets/images/logo_w.png'

// import './Footer.css'

const Footer = () => {
    return (
        <footer className='pFooter'>
            <section className='footerContainer'>
                <Link to='/'>
                    <img className='logoW' src={logo_w} alt='logo Kasa'/>
                </Link>
                <p className='copyright'>© 2020 Kasa, All rights reserved</p>
            </section>
        </footer>
    );
};

export default Footer;