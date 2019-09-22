import React from 'react';
import { PropTypes } from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
import { Content, List } from './albumsList.styles';
import AlbumCard from '../AlbumCard/AlbumCard';

export default function AlbumsList({ title, data, type, loading }) {
    return (
        <Content isLoading={loading}>
            <h2>{title}</h2>
            {!loading ? (
                <List>
                    {data.map(item => (
                        <AlbumCard key={item.id} item={item} type={type} />
                    ))}
                </List>
            ) : (
                <FaSpinner color="#999" size={32} />
            )}
        </Content>
    );
}

AlbumsList.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    type: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

AlbumsList.defaultProps = {
    loading: false,
};
