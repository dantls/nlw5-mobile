import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
