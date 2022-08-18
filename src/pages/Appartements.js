import React from 'react';

import { useParams } from 'react-router-dom';
import { AppartById } from '@/_services/DataManager';

import Error from '@/_utils/Error';
import Slider from '@/components/Slider';
import Tag from '@/components/Tag';
import Rating from '@/components/Rating';
import DropDown from '@/components/DropDown';


const Appartements = () => {

    const { appartId } = useParams()
    const appartement = AppartById(appartId)

    return appartement === undefined ? (
        <Error />) : (
        <section className='appartSection main'>
            <Slider
                pictures={appartement.pictures}
            />
            <div className='appartHeader'>
                <div className='appartDesc'>
                    <h1 className='title'>{appartement.title}</h1>
                    <p className='location'>{appartement.location}</p>
                    <ul className='tagSection'>
                        {appartement.tags.map((tag) => (
                            <Tag tagName={tag} key={tag} />
                        ))}
                    </ul>
                </div>
                <div className='hostCard'>
                    <div className='host'>
                        <div className='hostName'>{appartement.host.name}</div>
                        <img className='hostPicture' src={appartement.host.picture} alt={appartement.host.name} />
                    </div>
                    <Rating stars={appartement.rating} />
                </div>
            </div>
            <div className='description'>
                <DropDown title='Description' text={appartement.description} />
                <DropDown title='Equipements' text={
                    <ul>
                        {appartement.equipments}
                    </ul>
                } />
            </div>

        </section>
    );
};

export default Appartements;