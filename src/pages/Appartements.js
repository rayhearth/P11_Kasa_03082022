import React from 'react';

import { useParams } from 'react-router-dom';
import { AppartById } from '@/_services/DataManager';

import Error from '@/_utils/Error';
import Slider from '@/components/Slider';


const Appartements = () => {

    const { appartId } = useParams()
    const appartement = AppartById(appartId)

    return appartement === undefined ?(
        <Error/>) :(
        <section className='appartSection'>
            <Slider/>
        </section>
    );
};

export default Appartements;