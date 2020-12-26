// eslint-disable-next-line no-use-before-define
import React from 'react';

import { Container, Message, Spinner } from './styles';

type Props = {
  children: string;
};

const Loading: React.FC<Props> = ({ children }) => (
  <Container>
    <Spinner animating />
    <Message>{children}</Message>
  </Container>
);

export default Loading;
