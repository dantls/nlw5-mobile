import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import { EnvironmentButton } from '../../components/Environment';
import { Header } from '../../components/Header';
import api from '../../services/api';

import {styles} from './styles';

interface EnvironmentsProps {
  key: string;
  title: string
}

export function PlantSelect(){
  const [environments, setEnviroments] = useState<EnvironmentsProps[]>([]) 

  useEffect(() =>{
    async function fetchEnvironment(){
      const {data} = await api.get<EnvironmentsProps[]>('plants_environments');
      
      setEnviroments([{
        key: 'all',
        title: 'Todos'
      },...data]);

    }


    fetchEnvironment()

  },[])

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

      <View>
        <FlatList
          data={environments}
          renderItem={({item})=>(
            <EnvironmentButton 
              title={item.title}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
        
      </View>
    </SafeAreaView>
  )
}