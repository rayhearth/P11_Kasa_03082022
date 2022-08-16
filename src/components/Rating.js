import React from 'react';
import fullStar from '@/assets/img/star_rate_full.svg'
import emptyStar from '@/assets/img/star_rate_empty.svg'

/*
@params {{number}} props

pour chaque étoile comprises en 1 et 5 on push ds notre array rate
on return nos li et pour cela on map sur notre array rate
on utilise l'index en key pour avoir le nombre exact d'étoiles
pour les img on utilise une ternaire si il y a des étoiles on renvoi une full star sinon une étoile vide
*/

const Rating = ({ stars }) => {
    const rate = []
    console.log(rate)

    for (let i = 1; i <= 5; i++) {
        rate.push(i <= stars)
    }

    return (
        <ul className='rating'>
            {rate.map((star, index) => (
                <li className='star' key={`star-${index}`}>
                    <img src={star ? fullStar : emptyStar} alt={star ? 'Star full' : 'Star Empty'} />
                </li>
            ))}
        </ul>
    );
};

export default Rating;