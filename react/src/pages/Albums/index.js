import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';

import { Back, Content } from './styles';

export default function Albums({ match }) {
    const [album, setAlbum] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { id: albumId } = match.params;
            const accessToken = sessionStorage.getItem('access_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };
            try {
                const response = await api.get(`/albums/${albumId}`, config);
                if (response.data) {
                    setAlbum(response.data);
                    setLoading(false);
                }
            } catch (err) {
                sessionStorage.removeItem('access_token');
                isAuthenticated();
            }
        }
        fetchData();
    }, []);

    function millisecondsToMinutesAndSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${`0${seconds}`.slice(-2)}`;
    }

    return (
        <>
            <Back>
                <Link to="/">
                    <FaChevronLeft /> Voltar
                </Link>
            </Back>
            <Content>
                {!loading && album && (
                    <>
                        <AlbumCard type="album" item={album} plusSize />
                        <ol>
                            {album.tracks.items.map(track => (
                                <li key={track.id}>
                                    <span>{track.name}</span>
                                    <span className="time">
                                        {millisecondsToMinutesAndSeconds(
                                            track.duration_ms
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </Content>
        </>
    );
}
