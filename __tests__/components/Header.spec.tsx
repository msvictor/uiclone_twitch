import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../../src/components/Header';

describe('Header Component', () => {
  it('should be able to render a Header component', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header-component')).toBeTruthy();
  });
});
