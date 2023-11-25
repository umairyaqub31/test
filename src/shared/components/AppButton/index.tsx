import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import useStyles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}
const AppButton = (props: Props) => {
  const {title, style, ...otherProps} = props;
  const styles = useStyles({});
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.buttonText} {...otherProps}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
