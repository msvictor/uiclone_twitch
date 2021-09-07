import React from 'react';
import { FlatList } from 'react-native';

import { Wrapper, Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Title } from '../../components/Title';
import { CategoryList } from '../../components/CategoryList';
import { StreamList } from '../../components/StreamList';
import { ChannelList } from '../../components/ChannelList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

export const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      { key: 'CATEGORY_LIST', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'LIVE_STREAM_LIST', render: () => <StreamList /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: 'CW_STREAM_LIST', render: () => <StreamList /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: 'OFFLINE_CHANNELS_LIST', render: () => <ChannelList /> },
    ];

    // an array that contains only index of title elements
    const titleIndices: number[] = [];
    items.forEach((item, index) => item.isTitle && titleIndices.push(index));

    return {
      data: items,
      indices: titleIndices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};
