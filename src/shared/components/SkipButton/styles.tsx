import {StyleSheet} from 'react-native';
const useStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      width: '90%',
      height: 60,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: 20,
      borderWidth: 1,
      borderColor: '#61C3F2',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
  });

export default useStyles;
