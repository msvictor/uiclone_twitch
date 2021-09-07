import React from 'react';
import { render } from '@testing-library/react-native';
import { ChannelList } from '../../src/components/ChannelList';

describe('ChannelList Component', () => {
  it('should be able to render a ChannelList component', () => {
    const { getAllByText } = render(<ChannelList />);
    expect(getAllByText('victor_g_silva')).toBeTruthy();
  });
});
