import styled from 'styled-components/native';
import { colors } from '@theme';

import { moderateScale } from '@utils';

export const Container = styled.View`
  flex: 1;
  padding: ${moderateScale(20)}px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${moderateScale(18)}px;
  font-weight: bold;
  line-height: ${moderateScale(33)}px;
  color: ${colors.title};
  text-transform: uppercase;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Detail = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: ${moderateScale(20)}px;
`;

export const TitleDetail = styled.Text`
  font-size: ${moderateScale(14)}px;
  font-weight: bold;
  color: ${colors.title};
  text-transform: uppercase;
`;

export const TextDetail = styled.Text`
  font-size: ${moderateScale(22)}px;
  font-weight: bold;
  color: ${colors.title};
  text-transform: uppercase;
  margin-top: ${moderateScale(10)}px;
`;
