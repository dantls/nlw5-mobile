import React, {useEffect , useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image
} from 'react-native';

import {styles} from './styles';

export function Header(){
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function loadUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user'); 
      setUserName(user || '');
    }
    loadUserName()
  }
  ,[])


  return(
    <View style={styles.container} > 
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.username}>
          {userName}
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