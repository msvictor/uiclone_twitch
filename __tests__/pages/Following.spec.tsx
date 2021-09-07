import React from 'react';
import { render } from '@testing-library/react-native';
import { Following } from '../../src/pages/Following';

describe('Following Component', () => {
  it('should be able to render a Following component', () => {
    const { getByText } = render(<Following />);
    expect(getByText('Following')).toBeTruthy();
  });
});
