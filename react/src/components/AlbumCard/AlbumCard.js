import React from 'react';

import { Item } from './albumCard.styles';

export default function AlbumCard() {
    return (
        <Item>
            <img alt="" />
            <a href="./">Nome do álbum</a>
            <span>Nome do artista</span>
        </Item>
    );
}
