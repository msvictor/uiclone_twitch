import React from 'react';
import { render } from '@testing-library/react-native';
import { Heading } from '../../src/components/Heading';

describe('Heading Component', () => {
  it('should be able to render a Heading component', () => {
    const { getByTestId } = render(<Heading />);
    expect(getByTestId('heading-component')).toBeTruthy();
  });
});
