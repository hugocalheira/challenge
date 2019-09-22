import React from 'react';
import { PropTypes } from 'prop-types';
import { FaMusic } from 'react-icons/fa';

import { Item } from './albumCard.styles';

export default function AlbumCard({ item, type }) {
    return (
        <Item>
            {type === 'artist' && (
                <div className="card">
                    {item.images.length ? (
                        <img alt={item.name} src={item.images[1].url} />
                    ) : (
                        <div className="notAvailable">
                            <FaMusic />
                        </div>
                    )}
                    <p>{item.name}</p>
                </div>
            )}

            {type === 'album' && (
                <div className="card">
                    {item.images.length ? (
                        <img alt={item.name} src={item.images[1].url} />
                    ) : (
                        <div className="notAvailable">
                            <FaMusic />
                        </div>
                    )}
                    <p>{item.name}</p>
                    <span>{item.artists[0].name}</span>
                </div>
            )}

            {type === 'track' && (
                <div className="card">
                    {item.album.images.length ? (
                        <img
                            alt={item.album.name}
                            src={item.album.images[1].url}
                        />
                    ) : (
                        <div className="notAvailable">
                            <FaMusic />
                        </div>
                    )}
                    <p>{item.name}</p>
                    <span>{item.album.name}</span>
                </div>
            )}
        </Item>
    );
}

AlbumCard.propTypes = {
    type: PropTypes.string.isRequired,
    // data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
