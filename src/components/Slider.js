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
        setTimeout(()=>
            launchSlide({
                index : index,
                inProgress: false,
            }), 400)
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
        setTimeout(()=>
            launchSlide({
                index : index,
                inProgress: false,
            }), 400)
    }

    return (
        <div className='slide'>
            <SliderButton direction='previous' goTo={prev} />
            {pictures.map((picture, index) => slideAnim.index === index && (
                <div key={'slider-' + index} className='pictSlide'>
                    <img src={picture} alt="" />
                </div>
            ))}
            <SliderButton direction='next' goTo={next} />
            <div className="slideCount">{slideAnim.index + 1} / {pictures.length}</div>
        </div>
    );
};

export default Slider;