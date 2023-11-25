import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Header, Search, SearchRender, Wrapper} from '@components';
import {close} from '@assets';
import {RF} from '@theme';
import {data, watchData, watchData2} from '@services';

const Watch = ({navigation}: any) => {
  const [toggle, setToggle] = useState(false);
  const [searchText, setsearchText] = useState('');
  const renderItem = ({item}: any) => (
    <View style={toggle ? styles.halfCard : styles.fullCard}>
      <ImageBackground
        source={item.backImage}
        imageStyle={{borderRadius: 10}}
        style={[styles.imageBackground, {marginTop: toggle ? 0 : RF(20)}]}>
        <View style={styles.overFlowView}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
  const onPressSearch = () => {
    setToggle(!toggle);
  };

  const onChangeText = (text: any) => {
    setsearchText(text);
  };
  return (
    <ScrollView>
      <Wrapper>
        <View style={styles.mainView}>
          {toggle && (
            <View style={styles.paddingHorizontal}>
              <Search
                onPress={() => navigation.navigate('SearchScreen')}
                value={searchText}
                secondIcon={close}
                placeHolder={'TV shows, movies and more'}
                toggle={toggle}
                onChangeText={onChangeText}
                onPressSearch={onPressSearch}
              />
            </View>
          )}
          {!toggle && (
            <View style={styles.paddingHorizontal}>
              <Header title={'Watch'} onPressSearch={onPressSearch} />
            </View>
          )}
          <View style={styles.padding}>
            {toggle && searchText == '' && (
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={watchData}
                numColumns={2}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
              />
            )}
            {!toggle && searchText == '' && (
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={watchData2}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
              />
            )}
            {searchText && (
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={data}
                contentContainerStyle={styles.list}
                renderItem={({item}) => <SearchRender item={item} />}
              />
            )}
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default Watch;

const styles = StyleSheet.create({
  halfCard: {
    height: RF(100),
    width: '46.1%',
    borderRadius: 10,
    overflow: 'hidden',
    margin: '2%', // Adjust the margin to create space between columns
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: RF(16),
    fontWeight: '500',
  },
  padding: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    width: '100%',
    padding: RF(10),
    marginTop: RF(10),
  },
  list: {
    justifyContent: 'space-between', // Space items evenly between columns
    paddingHorizontal: '2.5%', // Adjust horizontal padding for the content
  },
  overFlowView: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: RF(10),
    paddingBottom: RF(20),
  },
  fullCard: {
    width: '100%',
    height: RF(180),
    borderRadius: RF(10),
  },
  mainView: {flex: 1, marginTop: RF(10)},
  paddingHorizontal: {paddingHorizontal: RF(20)},
});
