import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {search} from '@assets';

interface Props {
  title?: any;
  toggle?: any;
  onPressSearch?: () => void;
}

const Header = (props: Props) => {
  const {title, toggle, onPressSearch} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: RF(50),
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: '500', fontSize: RF(16), color: '#202C43'}}>
        {title}
      </Text>
      <Pressable
        onPress={onPressSearch}
        style={{
          height: RF(15),
          width: RF(15),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          source={search}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
