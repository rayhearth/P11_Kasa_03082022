import React from 'react';
// import {useNavigate} from 'react-router-dom'

const openAppart = (e) =>{
    // let navigate = useNavigate()
console.log(e)
}

const AppartCards = () => {
    return (
        <div className='appartCards' onClick={(e) => openAppart(e)}>
            
            <p>titre location</p>
            
        </div>
    );
};

export default AppartCards;