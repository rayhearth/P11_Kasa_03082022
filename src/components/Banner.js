import React from 'react';



const Banner = () => {
    return (
        <div className='banner'>
            <img src={process.env.PUBLIC_URL + '/img/bgbanner.png'} alt="photography of a landscape" />
            <h1>Chez vous, partout ailleurs</h1>
        </div>
    );
};

export default Banner;