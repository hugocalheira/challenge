import React from 'react';

import { Item } from './albumCard.styles';

export default function AlbumCard() {
    return (
        <Item>
            <div className="card">
                <img alt="Ozzy Osbourne - Ozzmosis" src="https://i.scdn.co/image/fbcdb523aac0ef5cb95a190f252e3368cdeccd63" />
                <p>Ozzmosis</p>
                <span>Ozzy Osbourne</span>
            </div>
        </Item>
    );
}
