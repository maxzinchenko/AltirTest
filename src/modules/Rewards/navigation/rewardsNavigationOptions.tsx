import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const rewardsNavigatorScreenOptions: NativeStackNavigationOptions & BottomTabNavigationOptions = {
  headerShown: false
};

export const rewardsTopBarScreenOptions: MaterialTopTabNavigationOptions = {
  tabBarIndicatorStyle: {
    backgroundColor: '#000'
  }
};

export const rewardsFeedScreenOptions: MaterialTopTabNavigationOptions = {
  title: 'Feed',
  tabBarLabelStyle: { textTransform: 'none' }
};

export const rewardsMyScreenOptions: MaterialTopTabNavigationOptions = {
  title: 'My rewards',
  tabBarLabelStyle: { textTransform: 'none' }
};
