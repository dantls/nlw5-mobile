import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 30,
    paddingTop:50,

  },
  spotlight:{
    width: '100%',
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110
  },
  spotlightImage:{
    width: 60,
    height: 60
  },
  spotlightText:{
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 17,
  },
  plants:{
    flex: 1,
    width: '100%',

  },
  plantsTitle:{
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  },
 
});

export {styles}