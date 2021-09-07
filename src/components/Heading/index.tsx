import React from 'react';
import { Container, HeadingText } from './styles';

export const Heading: React.FC = ({ children }) => {
  return (
    <Container testID="heading-component">
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};
