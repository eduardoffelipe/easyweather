import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { colors } from '@theme';
import { moderateScale, scale } from 'react-native-size-matters';

export const Container = styled.View`
  margin-top: ${moderateScale(20)}px;
`;

export const List = styled(FlatList as new () => FlatList<HourlyProps>).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: { marginLeft: 20 },
})``;

export const Card = styled.View`
  width: ${scale(100)}px;
  border-radius: 12px;
  background: ${colors.button};
  padding: ${moderateScale(20)}px 0px;
  margin-right: ${scale(20)}px;
  align-items: center;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  color: ${colors.buttonText};
  font-size: ${moderateScale(18)}px;
`;

export const Icon = styled.Image`
  width: ${scale(30)}px;
  height: ${moderateScale(30)}px;
`;

export const Temperature = styled.Text`
  color: ${colors.buttonText};
  font-size: ${moderateScale(18)}px;
`;
