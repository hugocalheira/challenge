import React from 'react';
import Routes from './routes';
import { FaSpotify } from 'react-icons/fa';

import GlobalStyle from './styles/global';

export default function App() {
    return (
        <>
            <span className="logo">
                <FaSpotify size="52"/>
            </span>
            <div className="container">
                <Routes />
                <GlobalStyle />
            </div>
        </>
    );
}
