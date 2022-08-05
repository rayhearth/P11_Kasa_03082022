import React from 'react';
import { Routes, Route } from 'react-router-dom';


import {Layout, Home, Accommodation, AboutUs} from '@/pages/Public'
import Error from '@/_utils/Error';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/about-us" element={<AboutUs />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;