import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './albumCard.styles';
import Picture from '../Picture/Picture';

export default function AlbumCard({ item, type }) {
    return (
        <Item>
            <div className="card">
                <Picture item={item} type={type} />
                <p>{item.name}</p>
                {type === 'album' && <span>{item.artists[0].name}</span>}
                {type === 'track' && <span>{item.album.name}</span>}
            </div>
        </Item>
    );
}

AlbumCard.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
};
