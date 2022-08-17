import React from 'react';
import { useState } from 'react';


const DropDown = ({ title, text }) => {


    const [openDropDown, setDropDown] = useState(false)

    return (
        <div className='dropDown'>
            <div className='dropHeader' onClick={() => { setDropDown(!openDropDown) }}>
                <div className='title'>{title}</div>
                <img src={process.env.PUBLIC_URL + '/img/arrow_up.svg'} className={`arrow ${openDropDown}`} alt="" />
            </div>
            {
                /*si dropdown est true le text s'affiche*/
                openDropDown && <div className='text'>{text}</div>
            }
        </div>
    );
};

export default DropDown;