import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaPlay, FaPause } from 'react-icons/fa';

import { Item } from './albumCard.styles';
import Picture from '../Picture/Picture';
import Player from '../../services/player';

export default function AlbumCard({ item, type, plusSize }) {
    const [playing, setPlaying] = useState(false);

    return (
        (item.preview_url || type !== 'tracks') && (
            <Item plusSize={plusSize}>
                {type !== 'tracks' ? (
                    <Link to={`/${type}/${item.id}`} className="card">
                        <Picture item={item} type={type} plusSize={plusSize} />
                        <p>{item.name}</p>
                        {type === 'albums' && (
                            <span>{item.artists[0].name}</span>
                        )}
                        {type === 'tracks' && <span>{item.album.name}</span>}
                    </Link>
                ) : (
                    <button
                        disabled={!item.preview_url}
                        type="button"
                        onClick={() => Player(item, playing, setPlaying)}
                        className={
                            playing && playing.id === item.id
                                ? 'card playing'
                                : 'card'
                        }
                    >
                        <Picture item={item} type={type} plusSize={plusSize} />
                        <p>{item.name}</p>
                        {type === 'albums' && (
                            <span>{item.artists[0].name}</span>
                        )}
                        {type === 'tracks' && <span>{item.album.name}</span>}
                        <span className="control">
                            {playing && playing.id === item.id ? (
                                <FaPause />
                            ) : (
                                <FaPlay />
                            )}
                        </span>
                    </button>
                )}
            </Item>
        )
    );
}

AlbumCard.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    plusSize: PropTypes.bool,
};

AlbumCard.defaultProps = {
    plusSize: false,
};
