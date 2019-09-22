import React from 'react';
import { PropTypes } from 'prop-types';

import { Content, List } from './albumsList.styles';
import AlbumCard from '../AlbumCard/AlbumCard';

export default function AlbumsList({ title, data, type }) {
    return (
        <Content>
            <h2>{title}</h2>
            <List>
                {data.map(item => (
                    <AlbumCard key={item.id} item={item} type={type} />
                ))}
            </List>
        </Content>
    );
}

AlbumsList.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
