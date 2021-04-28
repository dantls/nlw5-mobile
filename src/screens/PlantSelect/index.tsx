import React from 'react';

import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { Header } from '../../components/Header';

import {styles} from './styles';

export function PlantSelect(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta
        </Text>
      </View>
    </SafeAreaView>
  )
}