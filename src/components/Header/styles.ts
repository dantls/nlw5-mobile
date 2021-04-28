import { StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: getStatusBarHeight(),
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    
  },
  greeting:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  username:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image:{
    height: 70,
    width: 70,
    borderRadius: 40
  },
 
})

export {styles}