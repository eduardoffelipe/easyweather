import styled from 'styled-components/native';
import { colors } from '@theme';

import { LinearGradient } from '@utils';
import { moderateScale, scale } from 'react-native-size-matters';

export const Background = styled(LinearGradient).attrs({
  colors: ['#00d4ff', '#027fff'],
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  padding: 20px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled.Image`
  margin-right: 10px;
`;
export const LogoText = styled.Text`
  font-size: 22px;
  color: ${colors.title};
`;

export const Body = styled.View`
  flex: 1;
  padding-bottom: 20px;
  justify-content: center;
`;
export const Current = styled.View`
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;
export const Refresh = styled.View`
  margin-top: ${scale(20)}px;
  padding: 0px ${moderateScale(20)}px;
`;

export const ListForecast = styled.View``;
