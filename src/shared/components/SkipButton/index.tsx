import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import useStyles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  startIcon?: any;
  onPress?: any;
}
const SkipButton = (props: Props) => {
  const {title, style, startIcon, onPress, ...otherProps} = props;
  const styles = useStyles({});
  return (
    <TouchableOpacity {...props} style={styles.button}>
      {startIcon && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../../assets/icone.png')}
            style={{width: 20, height: 20, marginRight: 10}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.buttonText} {...otherProps}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SkipButton;
