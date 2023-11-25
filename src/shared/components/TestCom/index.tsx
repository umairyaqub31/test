import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

const data = [
  {
    id: '1',
    image: require('../../../assets/IMG1.png'),
    text1: 'Timless',
    text2: 'Fantasy',
    icon: require('../../../assets/Dotted.png'),
  },
  {
    id: '2',
    image: require('../../../assets/IMG1.png'),
    text1: 'In time',
    text2: 'cri-fi',
    icon: require('../../../assets/Dotted.png'),
  },
  {
    id: '3',
    image: require('../../../assets/IMG1.png'),
    text1: 'A time to kill',
    text2: 'Crime',
    icon: require('../../../assets/Dotted.png'),
  },
];

const TestCom = () => {
  const renderItem = ({item}: any) => (
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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TestCom;
