import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from 'react-native';


import { EnvironmentButton } from '../../components/Environment';
import { Load } from '../../components/Load';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import {styles} from './styles';
import colors from '../../styles/colors';

interface EnvironmentsProps {
  key: string;
  title: string
}
interface PlantsProps {
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

export function PlantSelect(){
  //Environments data sent by api
  const [environments, setEnviroments] = useState<EnvironmentsProps[]>([]) 

  //Plant data sent by api
  const [plants, setPlants] = useState<PlantsProps[]>([]) 

  //Data Filter 
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]) 
  
  //Button Selected 
  const [environmentsSelected, setEnviromentsSelected] = useState('all') 
  
  //Load control
  const [loading, setLoading] = useState(true) 

  //Pagination
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false)

  async function fetchEnvironment(){
    const {data} = await api
    .get<EnvironmentsProps[]>('plants_environments?_sort=title&_order=asc');
    
    setEnviroments([{
      key: 'all',
      title: 'Todos'
    },...data]);

  }
  async function fetchPlants(){
    const {data} = await api
    .get<PlantsProps[]>(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    if(!data){
      return setLoading(true);
    }
    if(page>1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    }else{
      setPlants(data);
      setFilteredPlants(data);
    }
 
    setLoading(false);
    setLoadingMore(false);

  }
  useEffect(() =>{
    fetchEnvironment()
  },[])

  useEffect(() =>{
    fetchPlants()
  },[])

  async function handleFetchMore(distance: number){
    if(distance < 1){
      return;
    }
    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants()
  }


  function handleEnvironmentSelected (environment: string){
    setEnviromentsSelected(environment);

    if(environment === 'all'){
      return setFilteredPlants(plants)
    }

    const filtered = plants.filter(plant => plant.environments.includes(environment))

    setFilteredPlants(filtered);

  }

  if(loading)
    return <Load />
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
          keyExtractor={(item) => String(item.key)}
          renderItem={({item})=>(
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentsSelected}
              onPress={()=>{handleEnvironmentSelected(item.key)}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
        
      </View>
      <View style={styles.plants}>

        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item})=>(
            <PlantCardPrimary 
              name={item.name}
              photo={item.photo}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.plantsList}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd})=>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green}/>
            : <></>
          }
        />
      </View>
    </SafeAreaView>
  )
}