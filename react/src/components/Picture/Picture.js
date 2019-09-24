import React from 'react';
import PropTypes from 'prop-types';
import { FaMusic } from 'react-icons/fa';

import { Block, Photo, NotAvailable } from './picture.styles';

export default function Picture({ item, type, plusSize, playing }) {
    function getPicture() {
        if (type !== 'tracks') {
            return item.images.length ? item.images[1].url : '';
        }
        const { album } = item;
        return album.images.length ? album.images[1].url : '';
    }

    function getAltName() {
        if (type !== 'tracks') {
            return item.name;
        }
        return item.album.name;
    }

    return (
        <Block className={plusSize ? 'gradient-effect' : ''}>
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
        </Block>
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
