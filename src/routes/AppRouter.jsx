import React from 'react';
import Home from '../pages/Home';
import Homero from '../pages/Homero';
import LoginForm from '../pages/Login';
import RegisterForm from '../pages/Register.jsx';

export let AppRouter = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/homero',
        element: <Homero />,
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
    {
        path: '/register',
        element: <RegisterForm />,
    },
];