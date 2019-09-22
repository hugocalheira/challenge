import React, { useState, useEffect } from 'react';

import { Search, Title } from './styles';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import api from '../../services/api';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    useEffect(() => {
        async function fetchData() {
            if (search.length === 0) return;

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
        }
        fetchData();
    }, [search]);

    return (
        <>
            <Search>
                <span>Busque por artistas, álbuns ou músicas</span>
                <input
                    type="text"
                    placeholder="Comece a escrever..."
                    onChange={handleChange}
                    value={search}
                />
            </Search>

            {search.length !== 0 && !loading && (
                <Title>Resultados encontrados para "{search}":</Title>
            )}

            {artists.length > 0 && (
                <AlbumsList
                    title="Artistas"
                    data={artists}
                    type="artist"
                    loading={loading}
                />
            )}

            {albums.length > 0 && (
                <AlbumsList
                    title="Álbuns"
                    data={albums}
                    type="album"
                    loading={loading}
                />
            )}

            {tracks.length > 0 && (
                <AlbumsList
                    title="Músicas"
                    data={tracks}
                    type="track"
                    loading={loading}
                />
            )}
        </>
    );
}
