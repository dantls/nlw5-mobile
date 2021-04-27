import React from 'react';

import { 
  SafeAreaView,
  View,
  Text
} from 'react-native';

import {Button} from '../../components/Button';
import { styles } from './styles';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

function Confirmation(){
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
          <Button title="Confirmar"/>
        </View>


      </View>
    </SafeAreaView>
  )
}

export {Confirmation}