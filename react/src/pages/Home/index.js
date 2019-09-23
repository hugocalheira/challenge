import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronLeft } from 'react-icons/fa';

import { Back, Search, Title } from './styles';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import api from '../../services/api';
import { isAuthenticated, getHeadersAuthorization } from '../../services/auth';

export default function Home({ match }) {
    const [loading, setLoading] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let url = '';
            const { id: artistId } = match.params;
            if (artistId) {
                url = `/artists/${artistId}/albums?album_type=album`;
            } else {
                url = `/search?q=${search}&type=artist,album,track`;
            }

            try {
                const strResults = sessionStorage.getItem('last_results');

                let response = { data: null };
                if (search.length === 0 && !artistId) {
                    response = {
                        data: JSON.parse(strResults) || {
                            artists: [],
                            albums: [],
                            tracks: [],
                        },
                    };
                } else {
                    response = await api.get(url, getHeadersAuthorization());

                    if (!artistId)
                        sessionStorage.setItem(
                            'last_results',
                            JSON.stringify(response.data)
                        );
                }

                if (artistId && response.data) {
                    setAlbums(response.data.items);
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
            {!match.params.id ? (
                <Search>
                    <span>Busque por artistas, álbuns ou músicas</span>
                    <input
                        type="text"
                        placeholder="Comece a escrever..."
                        onChange={handleChange}
                        value={search}
                        autoFocus
                    />
                </Search>
            ) : (
                <Back>
                    <Link to="/">
                        <FaChevronLeft /> Voltar
                    </Link>
                </Back>
            )}

            {search.length !== 0 && !loading && (
                <Title>{`Resultados encontrados para "${search}":`}</Title>
            )}

            {albums.length > 0 && (
                <AlbumsList
                    title={
                        !match.params.id
                            ? 'Albuns'
                            : `Exibindo resultados para "${albums[0].artists[0].name}"`
                    }
                    data={albums}
                    type="albums"
                    loading={loading}
                />
            )}

            {artists.length > 0 && (
                <AlbumsList
                    title="Artistas"
                    data={artists}
                    type="artists"
                    loading={loading}
                />
            )}

            {tracks.length > 0 && (
                <AlbumsList
                    title="Músicas"
                    data={tracks}
                    type="tracks"
                    loading={loading}
                />
            )}
        </>
    );
}

Home.propTypes = {
    match: PropTypes.object,
};

Home.defaultProps = {
    match: null,
};
