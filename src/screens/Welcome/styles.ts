import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  padding-bottom: ${statusBarHeight + 'px'};
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;
export const Title = styled.Text`
  width: 200px;
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  
  font-family: ${fonts.heading};
  margin-top: 38px;
  line-height: 34px;
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading}; 
  font-family: ${fonts.complement};
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;


//color: ${({theme}) => theme.colors.heading};
//font-family: jost_600;
// color: ${({theme}) => theme.colors.heading};
// font-family: jost_400;