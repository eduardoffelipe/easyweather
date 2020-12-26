import styled from 'styled-components/native';
import { moderateScale } from '@utils';
import { colors } from '@theme';
import { RectButton } from 'react-native-gesture-handler';

export const Btn = styled(RectButton)`
  border-radius: 12px;
  padding: ${moderateScale(10)}px;
  background-color: ${colors.title};
  color: ${colors.buttonText};
`;

export const TextButton = styled.Text`
  font-size: ${moderateScale(22)}px;
  font-weight: bold;
  text-align: center;
  color: ${colors.buttonText};
  text-transform: uppercase;
`;
