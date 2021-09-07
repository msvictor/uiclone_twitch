import React from 'react';

import data from './utils/data';

import { List } from './styles';
import { CategoryItem } from './components/CategoryItem';

export const CategoryList: React.FC = () => {
  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};
