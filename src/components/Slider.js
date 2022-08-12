import React, { useState } from 'react';
import SliderButton from './SliderButton';


const Slider = ({ pictures }) => {

    const [slideAnim, launchSlide] = useState({
        index: 0,
        inProgress: false
    })

    const next = () => {
        if (slideAnim.inProgress) return
        let index = slideAnim.index
        if (slideAnim.index < pictures.lenght - 1) index++
        else index = 0
        launchSlide({
            index: index,
            inProgress: true
        })
    }

    const prev = () => {
        if (slideAnim.inProgress) return
        let index = slideAnim.index
        if (slideAnim.index > 0) index--
        else index = pictures.lenght - 1
        launchSlide({
            index: index,
            inProgress: true
        })
    }

    return (
        <div className='slide'>
            {pictures.map((picture, index) => slideAnim.index === index && (
                <div key={'slider-' + index} className='pictSlide'>
                    <img src={picture} alt="" />
                </div>
            ))}
            <SliderButton direction='next' goTo={next} />
            <SliderButton direction='previous' goTo={prev} />
        </div>
    );
};

export default Slider;