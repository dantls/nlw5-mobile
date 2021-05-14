import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,

} from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import waterdrop from '../../assets/waterdrop.png';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import {formatDistance} from 'date-fns';
import {pt} from 'date-fns/locale';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    async function loadStorageData(){
      const plantsStorage = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {locale: pt}
      )
      setNextWaterd(
        `Não esqueça de regar a ${plantsStorage[0].name} às ${nextTime}.`
      )

      setMyPlants(plantsStorage)
      setLoading(false)
    }
    loadStorageData()
  },[]);
  
  async function handleRemove(plant:PlantProps) {
    Alert.alert('Remover',`Deseja remover a ${plant.name}?`,[
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async ()=>{
          try {
            await removePlant(plant.id)

            setMyPlants(oldData => oldData.filter(item => item.id !== plant.id))
          }
          catch(error){
            Alert.alert('Não foi possível remover')
          }
        }
      }
    ])
  }
  
  if(loading)
  return <Load />

  return(
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image 
          source={waterdrop}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWaterd}
        </Text>
      </View>
      <View style={styles.plants}>

        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item})=>(
            <PlantCardSecondary 
              data={item}
              handleRemove={()=>handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}
