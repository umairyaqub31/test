import {StyleSheet} from 'react-native';
import {HP, WP, darkThemeStyle, LAYOUT} from '../../theme';
const useStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: '#61C3F2', // Set your button's background color here
      width: WP(80),
      height: HP(7),
      marginTop: LAYOUT.MARGIN.HIGH,
      borderRadius: LAYOUT.RADIUS.BOX,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white', // Set your button text color here
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default useStyles;
