import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {styles} from './styles';
import {SvgFromUri} from 'react-native-svg';


interface PlantCardPrimaryProps extends RectButtonProps{
  data:{
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: Array<string>,
    frequency: {
      times: number,
      repeat_every: string;
    }
  }
}

export function PlantCardPrimary({
  data,
  ...rest
}:PlantCardPrimaryProps){
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri 
        uri={data.photo} 
        width={70}
        height={70}
      />

      <Text style={styles.text}>
        {data.name}
      </Text>
    </RectButton>
  )
}