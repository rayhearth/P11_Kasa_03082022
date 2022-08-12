import React from 'react';


const AppartCards = ({cover,title}) => {
    return (
        <article className='appartCards'>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </article>
    );
};

export default AppartCards;

