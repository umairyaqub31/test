import {dashboard, home, mediaLibrary, more, watch} from '@assets';
import {navigate} from '@services';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from '../stacks/dashboardStack';
import WatchStack from '../stacks/watchStack';
import MediaLibraryStack from '../stacks/mediaLibraryStack';
import MoreStack from '../stacks/moreStack';
import {RF} from '@theme';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state: any) => state.root.user);

  const styles = useStyles(theme.colors);
  const [activeStack, setActiveStack] = useState('HomeStack');

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle:
          // isModalVisible == false ?
          styles.tabBarStyle,
        //  : {display: 'none'},
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#827D88',
        tabBarIconStyle: styles.tabIcon,
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={dashboard}
              color={color}
              styles={styles}
              focused={focused}
              stack={'Dashboard'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={watch}
              color={color}
              styles={styles}
              focused={focused}
              stack={'Watch'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaLibraryStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={mediaLibrary}
              color={color}
              styles={styles}
              focused={focused}
              stack={'Media'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={more}
              color={color}
              styles={styles}
              focused={focused}
              stack={'More'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any,
) => {
  navigate(stack, {});
  setActiveStack(stack);
  if (stack == 'ScanStack' && activeStack == 'ScanStack') {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  styles,
  focused,
  colorCode,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  activeStack?: any;
  setActiveStack?: any;
  handleCaptureFlag?: any;
}) => {
  return (
    <Pressable
      style={{
        height: 8,
        // width: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
      onPress={() => {
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag);
      }}>
      <Image
        source={source}
        style={[
          styles.image,
          {
            tintColor: focused ? '#fff' : '#949494',
          },
        ]}
        resizeMode={'contain'}
      />
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: RF(18), height: RF(18), opacity: 100},
    img: {},
    tabIcon: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    tabBarStyle: {
      height: RF(75),
      backgroundColor: '#2E2739',
      borderTopRightRadius: RF(27),
      borderTopLeftRadius: RF(27),
      // borderRadius: RF(27),
      paddingBottom: 15.5,
      borderTopWidth: 0,
    },
  });

export default MainTabs;
