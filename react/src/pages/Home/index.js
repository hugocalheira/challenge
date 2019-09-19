import React from 'react';

import { Search } from './styles';
import AlbumsList from '../../components/AlbumsList';

export default function Home() {
    return (
        <>
            <Search>
                <span>Busque por artistas, álbuns ou músicas</span>
                <input type="text" placeholder="Comece a escrever..." />
            </Search>
            <AlbumsList />
        </>
    );
}
