import React from 'react';

import Banner from '@/components/public/Banner';
import AppartCards from '@/components/public/AppartCards';
import { AllAppart } from '@/_services/DataManager';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Banner />

            <section className='galleryContainer'>
                {AllAppart().map((lgt) => (
                    <Link to={`/appartements/${lgt.id}`} key={lgt.id}>
                        <AppartCards
                            cover={lgt.cover}
                            title={lgt.title}
                            id={lgt.id}
                        />
                    </Link>
                ))}
            </section>

            Home Works!
        </div>
    );
};

export default Home;