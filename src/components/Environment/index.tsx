import React from 'react';
import {Text} from 'react-native';
import { styles } from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'


interface EnvironmentProps extends RectButtonProps{
  title: string;
  active?: boolean;
} 

export function EnvironmentButton({ 
  title,
  active = false,
  ...rest
}: EnvironmentProps) {

  return(
     <RectButton
      style={[
        styles.container,
        active && styles.containerActive,
        
      ]}
      {...rest}
     >
       <Text style={[
         styles.title,
         active && styles.titleActive,
       ]}>
         {title}
       </Text>
    </RectButton>
  )
}
