import React from 'react';
import {Search, Wrapper} from '@components';
import {close} from '@assets';

const SearchScreen = ({navigation}: any) => {
  const onSubmit = () => {
    console.log('ssss');
    navigation.navigate('WatchScreen');
  };

  return (
    <Wrapper isPaddingH>
      {/* <TextHeader navigation={navigation} title={'Search'} _back /> */}
      <Search
        autoFocus
        onSubmitEditing={onSubmit}
        secondIcon={close}
        onPressSearch={onSubmit}
      />
    </Wrapper>
  );
};

export default SearchScreen;
