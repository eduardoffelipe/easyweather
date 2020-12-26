import styled from 'styled-components/native';
import { colors } from '@theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';

export const Title = styled.Text`
  line-height: ${moderateScale(33)}px;
  font-size: ${moderateScale(32)}px;
  color: ${colors.title};
`;
export const City = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${moderateScale(20)}px;
`;

export const CityText = styled.Text`
  line-height: ${moderateScale(28)}px;
  font-size: ${moderateScale(18)}px;
  color: ${colors.title};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerMainInfo = styled.View`
  justify-content: flex-end;
`;

export const TextMainInfo = styled.Text`
  font-size: ${moderateScale(62)}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.title};
`;

export const ContainersubInfo = styled.View`
  padding: 0px ${moderateScale(25)}px;
  flex-direction: column;
`;

export const SubInfo = styled.View`
  flex-direction: row;
`;
export const LabelSubInfo = styled.Text`
  text-transform: uppercase;
  color: ${colors.title};
`;

export const TextSubInfo = styled.Text`
  text-align: center;
  font-size: ${moderateScale(18)}px;
  color: ${colors.title};
  font-weight: bold;
`;
export const IconV = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconAngleDown = styled(Icon).attrs({
  name: 'angle-down',
  color: '#E1E1E1',
  size: 20,
})`
  margin: -12px 2px; //para tirar a margin original do icone
`;

export const IconAngleUp = styled(Icon).attrs({
  name: 'angle-up',
  color: '#E1E1E1',
  size: 20,
})`
  margin: -3px 2px; //para tirar a margin original do icone
`;
