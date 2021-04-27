import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: { 
    flex: 1,
    width: '100%',
  },
  header:{
    alignItems: 'center',
  },
  form: {
    flex: 1,
    paddingHorizontal: 54,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize:18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title:{
    fontSize:24,
    lineHeight:32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer:{
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})

export {styles}