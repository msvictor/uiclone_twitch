import React from 'react';
import type data from '../../utils/data';

import {
  Container,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

interface iCategoryItemProps {
  item: typeof data[0];
}

export const CategoryItem: React.FC<iCategoryItemProps> = ({ item }) => {
  return (
    <Container>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9k</Info>
      </CategoryStatus>
    </Container>
  );
};
