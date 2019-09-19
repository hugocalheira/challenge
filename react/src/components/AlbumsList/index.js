import React from 'react';

import { Content, List } from './styles';
import Album from '../Album';

export default function AlbumsList() {
  return (
    <Content>
      <h2>Álbuns buscados recentemente</h2>
      <List>
        { [1,2,3,4,5].map( n => 
          <Album />
        )}
      </List>
    </Content>
  );
}
