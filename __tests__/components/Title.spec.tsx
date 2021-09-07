import React from 'react';
import { render } from '@testing-library/react-native';
import { Title } from '../../src/components/Title';

describe('Title Component', () => {
  it('should be able to render a tile component', () => {
    const { getByText } = render(<Title>test</Title>);
    expect(getByText('test')).toBeTruthy();
  });
});
