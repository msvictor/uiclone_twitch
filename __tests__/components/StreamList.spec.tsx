import React from 'react';
import { render } from '@testing-library/react-native';
import { StreamList } from '../../src/components/StreamList';

describe('StreamList Component', () => {
  it('should be able to render a StreamList component', () => {
    const { getAllByText } = render(<StreamList />);
    expect(getAllByText('victorgms')).toBeTruthy();
  });
});
