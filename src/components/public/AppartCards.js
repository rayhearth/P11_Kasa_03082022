import React from 'react';

// import {useNavigate} from 'react-router-dom'

const openAppart = (e) =>{
    // let navigate = useNavigate()
console.log(e)
}

const AppartCards = (props) => {
    return (
        <article className='appartCards' onClick={(e) => openAppart(e)}>
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
        </article>
    );
};

export default AppartCards;