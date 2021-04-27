import React, { useState } from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
  
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';

import {styles} from './styles'

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleSubmit(){
    navigation.navigate('Confirmation');
  }


  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name)
  }
  function handleInputFocus(){
    setIsFocused(true);

  }
  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === 'ios' 
          ? 'padding'
          : 'height'
        }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  😀 
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {borderColor: colors.green }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button 
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </View>
            </View>
            
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
     </SafeAreaView>
  )
}