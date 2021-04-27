import React from 'react';
import wateringImg from '../../assets/watering.png'
import { Button } from '../../components/ButtonWelcome';

import {Feather} from '@expo/vector-icons';

import {
  Image,
  Title,
  SubTitle,
  Container,
  Wrapper,
} from './styles';
import { useNavigation } from '@react-navigation/core';


export function Welcome(){

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }

  return(
    <Wrapper>
      <Container>
        <Title>
          Gerencie suas plantas de forma fácil
        </Title>

        <Image
          source={wateringImg}
          resizeMode="contain"
        />
        <SubTitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar 
          você sempre que precisar
        </SubTitle>
         
         <Button
          onPress={handleStart}
         >
           <Feather 
            name="chevron-right"
            size={24}
            color="white"
           />
         </Button>
      
      </Container>
    </Wrapper>
  )
}