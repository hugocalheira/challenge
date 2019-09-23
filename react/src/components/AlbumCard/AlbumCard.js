import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item } from './albumCard.styles';
import Picture from '../Picture/Picture';

export default function AlbumCard({ item, type, plusSize }) {
    return (
        <Item plusSize={plusSize}>
            <Link to={`/albums/${item.id}`} className="card">
                <Picture item={item} type={type} plusSize={plusSize} />
                <p>{item.name}</p>
                {type === 'album' && <span>{item.artists[0].name}</span>}
                {type === 'track' && <span>{item.album.name}</span>}
            </Link>
        </Item>
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
