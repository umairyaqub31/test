import {AppButton, SkipButton} from '@components';
import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';

const MediaLibrary = () => {
  let genresData = ['Action', 'Action', 'Action', 'Action'];
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/BackgroundTest.png')}
          style={styles.backgroundImage}>
          <View style={styles.whiteBackground} />
          <Image
            source={require('../../assets/bglogo.png')}
            style={{
              width: 100,
              height: 30,
              top: '52%',
              alignSelf: 'center',
            }}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>In theaters december 22, 2021</Text>
            <AppButton title="Get Tickets" />
            <SkipButton title="Watch Trailer" startIcon />
          </View>
        </ImageBackground>
      </View>
      <View style={{paddingTop: 27, paddingHorizontal: 40}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#202C43'}}>
          Genres
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          {genresData.map(d => (
            <View
              style={{
                backgroundColor: '#E26CA5',
                padding: 8,
                borderRadius: 16,
              }}>
              <Text style={{fontSize: 12, fontWeight: '600', color: '#fff'}}>
                {d}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginTop: 30,
            width: '100%',
            height: 1,
            borderWidth: 1,
            borderColor: '#000000',
            opacity: 0.1,
          }}></View>
        <Text
          style={{
            color: '#202C43',
            fontWeight: '600',
            fontSize: 16,
            marginVertical: 20,
          }}>
          OverView
        </Text>
        <Text
          style={{
            color: '#8F8F8F',
            fontWeight: '400',
            fontSize: 12,
          }}>
          As a collection of history's worst tyrants and criminal masterminds
          gather to plot a war to wipe out millions, one man must race against
          time to stop them. Discover the origins of the very first independent
          intelligence agency in The King's Man. The Comic Book “The Secret
          Service” by Mark Millar and Dave Gibbons.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    resizeMode: 'cover',

    width: '100%',
    height: 466,
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    top: 10,
  },
});

export default MediaLibrary;
