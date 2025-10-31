import React from 'react';
import Home from '../pages/Home';
import Homero from '../pages/Homero';

export let AppRouter = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/homero',
        element: <Homero />,
    },
];