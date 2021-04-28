import { StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.background
  },
  header:{ 
    paddingHorizontal:30
  },

  title:{
    fontSize:17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle:{
    fontSize:17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading,

  }
})

export {styles}