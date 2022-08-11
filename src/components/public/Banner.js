import React from 'react';

import bgbanner from '@/assets/images/bgbanner.png'


const Banner = () => {
    return (
        <div className='banner'>
            <img src={bgbanner} alt="photography of a landscape" />
            <h1>Chez vous, partout ailleurs</h1>
        </div>
    );
};

export default Banner;