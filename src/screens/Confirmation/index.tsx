import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { 
  SafeAreaView,
  View,
  Text
} from 'react-native';

import {Button} from '../../components/Button';
import { styles } from './styles';

function Confirmation(){
  const navigation = useNavigation();

  function handleSubmit(){
    navigation.navigate('PlantSelect');
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
        😀 
        </Text>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button 
            title="Confirmar"
            onPress={()=>{handleSubmit()}}
          />
        </View>


      </View>
    </SafeAreaView>
  )
}

export {Confirmation}