import React, { useState } from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';

import {styles} from './styles'

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  async function handleSubmit(){
    if(!name){
      return Alert.alert("Me diz como chamar você :😭")
    }
    try{
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation',{
        title:'Prontinho',
        subtitle:'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen:'PlantSelect'
      });
    }catch(err){
      Alert.alert("Não foi possível salvar o seu nome😭")
    }
    
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