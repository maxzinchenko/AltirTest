import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { RewardsHeaderContainer } from '../containers/RewardsHeaderContainer';

export const rewardsNavigatorScreenOptions = (safeAreaTop: number): BottomTabNavigationOptions => ({
  headerShown: true,
  headerTitle: RewardsHeaderContainer,
  headerShadowVisible: false,

  headerStyle: {
    height: 64 + safeAreaTop
  },

  headerTitleContainerStyle: {
    width: '100%'
  }
});

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
