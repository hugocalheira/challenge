import React from 'react';
import PropTypes from 'prop-types';
import { FaMusic } from 'react-icons/fa';

import { Photo, NotAvailable } from './picture.styles';

export default function Picture({ item, type, plusSize }) {
    function getPicture() {
        if (type !== 'track') {
            return item.images.length ? item.images[1].url : '';
        }
        const { album } = item;
        return album.images.length ? album.images[1].url : '';
    }

    function getAltName() {
        if (type !== 'track') {
            return item.name;
        }
        return item.album.name;
    }

    return (
        <>
            {getPicture() ? (
                <Photo
                    alt={getAltName()}
                    src={getPicture()}
                    plusSize={plusSize}
                />
            ) : (
                <NotAvailable plusSize={plusSize}>
                    <FaMusic />
                </NotAvailable>
            )}
        </>
    );
}

Picture.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    plusSize: PropTypes.bool,
};

Picture.defaultProps = {
    plusSize: false,
};