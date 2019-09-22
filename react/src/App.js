import React, { useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
// import axios from 'axios';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { isAuthenticated } from './services/auth';

export default function App() {
    useEffect(() => {
        isAuthenticated();
    }, []);

    return (
        <>
            <span className="logo">
                <FaSpotify size="52" />
            </span>
            <div className="container">
                <Routes />
            </div>
            <GlobalStyle />
        </>
    );
}
