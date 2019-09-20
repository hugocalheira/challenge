import React from 'react';
import { PropTypes } from 'prop-types';

import { Content, List } from './albumsList.styles';
import AlbumCard from '../AlbumCard/AlbumCard';

export default function AlbumsList({ title, data }) {
    return (
        <Content>
            <h2>{title}</h2>
            <List>
                {data.map(n => (
                    <AlbumCard key={n} />
                ))}
            </List>
        </Content>
    );
}

AlbumsList.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
