import styled from 'styled-components/native';
import { colors } from '@theme';
import { moderateScale } from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${colors.title};
  font-size: ${moderateScale(18)}px;
  margin-top: ${moderateScale(10)}px;
`;
export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.title,
})``;
