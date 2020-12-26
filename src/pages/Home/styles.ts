import styled from 'styled-components/native';
import { colors } from '@theme';

import { scale, moderateScale, LinearGradient } from '@utils';

export const Background = styled(LinearGradient).attrs({
  colors: ['#00d4ff', '#027fff'],
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: ${scale(40)}px 0px;
  align-self: center;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Sun = styled.Image`
  margin-top: ${scale(200)}px;
`;

export const Title = styled.Text`
  line-height: ${moderateScale(33)}px;
  font-size: ${moderateScale(32)}px;
  color: ${colors.title};
`;

export const WeatherInfo = styled.View`
  margin-top: ${scale(20)}px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${scale(35)}px ${moderateScale(25)}px;
`;
