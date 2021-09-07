import React from 'react';

import {
  Container,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

export const ChannelItem: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Avatar />
        <Column>
          <UserName>victor_g_silva</UserName>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </Container>
  );
};
