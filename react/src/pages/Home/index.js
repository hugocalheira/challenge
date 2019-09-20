import React from 'react';

import { Search } from './styles';
import AlbumsList from '../../components/AlbumsList/AlbumsList';

export default function Home() {
    return (
        <>
            <Search>
                <span>Busque por artistas, álbuns ou músicas</span>
                <input type="text" placeholder="Comece a escrever..." />
            </Search>
            <AlbumsList
                title="Álbuns buscados recentemente"
                data={[1, 2, 3, 4, 5]}
            />
            <AlbumsList
                title="Artistas buscados recentemente"
                data={[1, 2, 3, 4, 5]}
            />
        </>
    );
}
