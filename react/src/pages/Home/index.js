import React, { useState, useEffect } from 'react';

import { Search, Title } from './styles';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import api from '../../services/api';
import { isAuthenticated, getHeadersAuthorization } from '../../services/auth';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            try {
                const strResults = sessionStorage.getItem('last_results');

                let response = { data: null };
                if (search.length === 0) {
                    response = {
                        data: JSON.parse(strResults) || {
                            artists: [],
                            albums: [],
                            tracks: [],
                        },
                    };
                } else {
                    response = await api.get(
                        `/search?q=${search}&type=artist,album,track`,
                        getHeadersAuthorization()
                    );

                    sessionStorage.setItem(
                        'last_results',
                        JSON.stringify(response.data)
                    );
                }

                if (response.data.artists && response.data.artists.items) {
                    setArtists(response.data.artists.items);
                }

                if (response.data.albums && response.data.albums.items) {
                    setAlbums(response.data.albums.items);
                }

                if (response.data.tracks && response.data.tracks.items) {
                    setTracks(response.data.tracks.items);
                }
            } catch (err) {
                sessionStorage.removeItem('access_token');
                isAuthenticated();
                return;
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
                <Title>{`Resultados encontrados para "${search}":`}</Title>
            )}

            {albums.length > 0 && (
                <AlbumsList
                    title="Álbuns"
                    data={albums}
                    type="album"
                    loading={loading}
                />
            )}

            {artists.length > 0 && (
                <AlbumsList
                    title="Artistas"
                    data={artists}
                    type="artist"
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
