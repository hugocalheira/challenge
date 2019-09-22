import React, { useState } from 'react';

import { Search } from './styles';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import api from '../../services/api';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);

    const [search, setSearch] = useState('');
    const handleChange = e => setSearch(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        const accessToken = sessionStorage.getItem('access_token');
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await api.get(
            `/search?q=${search}&type=artist,album,track`,
            config
        );

        if (response.data.artists && response.data.artists.items) {
            setArtists(response.data.artists.items);
        }

        if (response.data.albums && response.data.albums.items) {
            setAlbums(response.data.albums.items);
        }

        if (response.data.tracks && response.data.tracks.items) {
            setTracks(response.data.tracks.items);
        }
        setLoading(false);
    };

    return (
        <>
            <Search>
                <form onSubmit={handleSubmit}>
                    <span>Busque por artistas, álbuns ou músicas</span>
                    <input
                        type="text"
                        placeholder="Comece a escrever..."
                        onChange={handleChange}
                        value={search}
                    />
                </form>
            </Search>
            <AlbumsList
                title="Artistas buscados recentemente"
                data={artists}
                type="artist"
                loading={loading}
            />
            <AlbumsList
                title="Álbuns buscados recentemente"
                data={albums}
                type="album"
                loading={loading}
            />
            <AlbumsList
                title="Músicas buscadas recentemente"
                data={tracks}
                type="track"
                loading={loading}
            />
        </>
    );
}
