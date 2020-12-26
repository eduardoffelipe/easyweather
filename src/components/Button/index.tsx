// eslint-disable-next-line no-use-before-define
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Btn, TextButton } from './styles';

type Props = RectButtonProperties & {
  children: string;
};

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <Btn {...rest}>
    <TextButton>{children}</TextButton>
  </Btn>
);

export default Button;
