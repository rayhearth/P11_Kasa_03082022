import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='pFooter'>
            <section className='footerContainer'>
                <Link to='/'>
                    <img className='logoW' src={process.env.PUBLIC_URL + '/img/logo_w.png'} alt='logo Kasa'/>
                </Link>
                <p className='copyright'>© 2020 Kasa, All rights reserved</p>
            </section>
        </footer>
    );
};

export default Footer;