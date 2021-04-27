import React, { ReactNode } from 'react';
import { Container } from './styles';

import { TouchableOpacityProps} from 'react-native'


interface ButtonProps extends TouchableOpacityProps{
  children: ReactNode;
} 

export function Button({ children,...rest}: ButtonProps) {
  return(
     <Container
      activeOpacity={0.7}
      {...rest}
     >
       {children}
    </Container>
  )
}
