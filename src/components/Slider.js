import React, { useState } from 'react';


const Slider = ({ pictures }) => {

    const [index, setSlide] = useState(0)


    const next = () => {
        //si j'arrive à la fin des pictures
        console.log(index)
        if (index === pictures.length - 1 ) {
            //je retourne à 0
            setSlide(0)
        } else {
            //sinon j'ajoute 1
            setSlide(index + 1)

        }
    }

    const prev = () => {
        //si j'arrive à la première image
        if (index === 0) {
            //je retourne à la dernière img
            setSlide(pictures.length - 1)
        } else {
            //sinon j'enlève 1
            setSlide(index - 1)
        }
    }

    return (
        <div className='slide'>
            {pictures.length > 1 && (
                <img onClick={prev} className='prev btn' src={process.env.PUBLIC_URL + '/img/arrow_back.svg'} alt="previous button" />
            )}

            <div className='pictSlide'>
                <img className='mainPict' src={pictures[index]} alt="" />
            </div>

            {pictures.length > 1 && (
                <img onClick={next} className='next btn' src={process.env.PUBLIC_URL + '/img/arrow_forward.svg'} alt="next" />
            )}

            <div className='slideCount'>{index + 1} / {pictures.length}</div>

        </div>
    );
};

export default Slider;