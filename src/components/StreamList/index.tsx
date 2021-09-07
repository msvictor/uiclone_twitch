import React from 'react';

import { List } from './styles';
import { StreamItem } from './components/StreamItem';

export const StreamList: React.FC = () => {
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};
