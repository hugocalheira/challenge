import React from 'react';
import { FaSpotify } from 'react-icons/fa';

import { Search } from './styles';

export default function Home() {
    return (
        <>
            <FaSpotify color="#fff" size="45" />
            <Search>
                <span>Busque por artistas, álbuns ou músicas</span>
                <input type="text" placeholder="Comece a escrever..." />
            </Search>
        </>
    );
}
