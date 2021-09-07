import React from 'react';

import thumbnail from '../../../../images/stream_thumbnail.jpg';

import {
  Container,
  Thumbnail,
  Column,
  InfoRow,
  Header,
  Avatar,
  UserName,
  Description,
  Category,
  TagsRow,
  TagBadge,
  TagText,
} from './styles';

export const StreamItem: React.FC = () => {
  return (
    <Container>
      <Thumbnail source={thumbnail} />

      <Column>
        <InfoRow>
          <Header>
            <Avatar />
            <UserName numberOfLines={1}>victorgms</UserName>
          </Header>

          <Description numberOfLines={1}>
            Aliqua irure proident amet in Lorem sint sunt laborum magna amet sit
            reprehenderit irure Lorem.
          </Description>

          <Category numberOfLines={1}>Games & Technology</Category>
        </InfoRow>

        <TagsRow>
          <TagBadge>
            <TagText>Portuguese</TagText>
          </TagBadge>
          <TagBadge>
            <TagText>Mobile Development</TagText>
          </TagBadge>
        </TagsRow>
      </Column>
    </Container>
  );
};
