import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {styles} from './styles';
import {SvgFromUri} from 'react-native-svg';


interface PlantCardPrimaryProps extends RectButtonProps{
  name: string;
  photo: string;
}

export function PlantCardPrimary({
  name,
  photo,
  ...rest
}:PlantCardPrimaryProps){
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri 
        uri={photo} 
        width={70}
        height={70}
      />

      <Text style={styles.text}>
        {name}
      </Text>
    </RectButton>
  )
}