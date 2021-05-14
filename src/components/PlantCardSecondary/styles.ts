import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container:{
    width: '100%',
    paddingHorizontal:10,
    paddingVertical:25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5
  },
  title:{
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
    marginRight: 10
  },
  time: {
    marginTop: 5,
    fontFamily: fonts.text,
    color: colors.body_dark,
    marginRight: 10

  },
  buttonRemove:{
    width:100,
    height:85,
    backgroundColor: colors.red,
    marginTop:15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    right: 10,
    paddingLeft: 15
  }
})

export {styles}