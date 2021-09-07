import React from 'react';
import { render } from '@testing-library/react-native';
import { CategoryList } from '../../src/components/CategoryList';

describe('CategoryList Component', () => {
  it('should be able to render a CategoryList component', () => {
    const { getByText } = render(<CategoryList />);
    expect(getByText('League of Legends')).toBeTruthy();
  });
});
