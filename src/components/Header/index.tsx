import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import {styles} from './styles';

export function Header(){
  return(
    <View style={styles.container} > 
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.username}>
          Danilo
        </Text>
      </View>
      
    
      <Image 
        style={styles.image}
        source={{
          uri:'https://avatars.githubusercontent.com/u/51554360?v=4'
        }}
      />

    </View>
   
  )
}