import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {search} from '@assets';

interface Props {
  placeHolder?: any;
  colors?: any;
  height?: any;
  b_Margin?: any;
  radius?: any;
  secondIcon?: any;
  toggle?: any;
  onPressSearch?: () => void;
  onPress?: any;
  autoFocus?: any;
  onSubmitEditing?: any;
  value?: string;
  onChangeText?: any;
}

const Search = (props: Props) => {
  const {
    placeHolder,
    colors,
    height,
    b_Margin,
    radius,
    secondIcon,
    autoFocus,
    onPressSearch,
    onPress,
    onSubmitEditing,
    value,
    onChangeText,
  } = props;
  return (
    <View
      style={[
        styles.searchContainer,
        {
          height: height ? height : RF(52),
          marginBottom: b_Margin ? b_Margin : 10,
          borderRadius: radius ? radius : 30,
        },
      ]}>
      <Image
        source={search}
        style={[
          styles.searchImg,
          {
            height: height ? height / 2.5 : 18,
            width: height ? height / 2.4 : 18,
          },
        ]}
      />

      <TextInput
        // onPressIn={onPress}
        value={value}
        style={[
          styles.input,
          {
            fontSize: height ? height / 3 : 14,
            width: secondIcon ? '70%' : '80%',
          },
        ]}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
        // value={text}
        onChangeText={text => onChangeText(text)}
      />
      {secondIcon && (
        <Pressable onPress={onPressSearch}>
          <Image
            source={secondIcon}
            style={[
              styles.searchImg,
              {
                height: 22,
                width: 22,
                marginLeft: 10,
              },
            ]}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#F8F8F8',
    paddingLeft: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F8F8F8',
    height: 'auto',
    width: '80%',
    // paddingHorizontal: 19,
    paddingVertical: 0,
    marginLeft: 8,
  },
  searchImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
