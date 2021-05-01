import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import DateTimePicker,{Event} from '@react-native-community/datetimepicker';

import {useRoute} from '@react-navigation/core'
import {SvgFromUri} from 'react-native-svg';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import {isBefore, format} from 'date-fns';
import {styles} from './styles';
import { loadPlant, PlantProps, savePlant } from '../../libs/storage';

interface Params {
  plant: PlantProps
}

export function PlantSave(){
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')


  async function handleSave(){
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })
    }catch(error) {
      Alert.alert(error.message)
    }
  }

  function handleChangeTime(event: Event, dateTime: Date|undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState =>!oldState)
    }
    if(dateTime && isBefore(dateTime, new Date()) ){
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora no futuro.')
    }
    
    if(dateTime){
      setSelectedDateTime(dateTime)
    }
  }
  function handleOpenDateTimePickerForAndroid(){
    setShowDatePicker(oldState => !oldState)
  }

  const route = useRoute();
  const {plant} = route.params as Params;
  return(
    <View style={styles.container}>
      <View 
        style={styles.plantInfo}
      >
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>

        <Text style={styles.plantAbout}>
         {plant.about}
        </Text>

      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdrop}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
          
        </View>
        <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado
        </Text>

        {showDatePicker && (
          <DateTimePicker 
            value={selectedDateTime}  
            mode="time"
            display="spinner"
            onChange={handleChangeTime} 
          />
        )}

        {Platform.OS === 'android' && (
          <TouchableOpacity 
            onPress={handleOpenDateTimePickerForAndroid}
            style={styles.dateTimePickerButton}
          >
            <Text style={styles.dateTimePickerText}> 
              {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </Text>
          </TouchableOpacity>
        )}

        <Button 
          title='Cadastrar planta'
          onPress={handleSave}
        />
      </View>
    </View>
    
  )
}