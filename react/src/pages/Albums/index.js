import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    FaChevronLeft,
    FaPlay,
    FaPause,
    FaBan,
    FaSpinner,
} from 'react-icons/fa';

import AlbumCard from '../../components/AlbumCard/AlbumCard';
import api from '../../services/api';
import { isAuthenticated, getHeadersAuthorization } from '../../services/auth';
import { Back, Content } from './styles';
import Player from '../../services/player';

export default function Albums({ match }) {
    const [album, setAlbum] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { id: albumId } = match.params;
            try {
                const response = await api.get(
                    `/albums/${albumId}`,
                    getHeadersAuthorization()
                );
                if (response.data) {
                    setAlbum(response.data);
                    setLoading(false);
                }
            } catch (err) {
                sessionStorage.removeItem('access_token');
                console.error(err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    function millisecondsToMinutesAndSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${`0${seconds}`.slice(-2)}`;
    }

    return (isAuthenticated()) ? (
        <>
            <Back>
                <Link to="/">
                    <FaChevronLeft /> Voltar
                </Link>
            </Back>
            <Content isLoading={loading}>
                {!loading ? (
                    album && (
                        <>
                            <AlbumCard
                                className="big"
                                type="albums"
                                item={album}
                                plusSize
                            />
                            <div>
                                {album.tracks.items.map(track => (
                                    <button
                                        disabled={!track.preview_url}
                                        className={
                                            playing && playing.id === track.id
                                                ? 'playing'
                                                : ''
                                        }
                                        type="button"
                                        key={track.id}
                                        onClick={() =>
                                            Player(track, playing, setPlaying)
                                        }
                                    >
                                        <span>{track.name}</span>
                                        <span className="time">
                                            <span
                                                className={
                                                    track.preview_url === null
                                                        ? 'disabled'
                                                        : 'enabled'
                                                }
                                            >
                                                <FaBan />
                                            </span>
                                            <span className="control">
                                                {playing &&
                                                playing.id === track.id ? (
                                                    <FaPause />
                                                ) : (
                                                    <FaPlay />
                                                )}
                                            </span>
                                            {millisecondsToMinutesAndSeconds(
                                                track.duration_ms
                                            )}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )
                ) : (
                    <FaSpinner color="#999" size={32} />
                )}
            </Content>
        </>
    ) : (
        <Redirect to='/auth' />
    );
}

Albums.propTypes = {
    match: PropTypes.object.isRequired,
};
