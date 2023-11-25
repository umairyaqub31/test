import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

const SearchRender = ({item}: any) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
      <View></View>
      <Image
        source={item.image}
        style={{width: 150, height: 100, borderRadius: 10, marginRight: 10}}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#202C43'}}>
          {item.text1}
        </Text>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#DBDBDF'}}>
          {item.text2}
        </Text>
      </View>
      <Image
        source={item.icon}
        style={{marginLeft: 'auto', width: 20, height: 4}}
      />
    </View>
  );
};

export default SearchRender;
