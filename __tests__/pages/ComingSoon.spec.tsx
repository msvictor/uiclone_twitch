import React from 'react';
import { render } from '@testing-library/react-native';
import { ComingSoon } from '../../src/pages/ComingSoon';

describe('ComingSoon Component', () => {
  it('should be able to render a ComingSoon component', () => {
    const { getByText } = render(<ComingSoon />);
    expect(getByText('Coming Soon...')).toBeTruthy();
  });
});
