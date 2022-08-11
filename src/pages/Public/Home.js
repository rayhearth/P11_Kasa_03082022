import React from 'react';
import Banner from '@/components/public/Banner';
import AppartCards from '@/components/public/AppartCards';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <AppartCards/>
            Home Works !
        </div>
    );
};

export default Home;