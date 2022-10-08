import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen } from '../../../constants/screenConstants';
import { RewardsFeedScreen } from '../screens/RewardsFeedScreen';
import { RewardsMyScreen } from '../screens/RewardsMyScreen';
import { RewardsBottomBarContainer } from '../containers/RewardsBottomBarContainer';

import {
  rewardsFeedScreenOptions,
  rewardsMyScreenOptions,
  rewardsNavigatorScreenOptions,
  rewardsTopBarScreenOptions
} from './rewardsNavigationOptions';

const RewardsTopTabs = createMaterialTopTabNavigator();
const RewardsTopTab = () => (
  <RewardsTopTabs.Navigator screenOptions={rewardsTopBarScreenOptions}>
    <RewardsTopTabs.Screen
      name={Screen.REWARDS_TABS_FEED}
      component={RewardsFeedScreen}
      options={rewardsFeedScreenOptions}
    />
    <RewardsTopTabs.Screen name={Screen.REWARDS_TABS_MY} component={RewardsMyScreen} options={rewardsMyScreenOptions} />
  </RewardsTopTabs.Navigator>
);

const RewardsBottomTabs = createBottomTabNavigator();
export const RewardsNavigation = () => (
  <RewardsBottomTabs.Navigator screenOptions={rewardsNavigatorScreenOptions} tabBar={RewardsBottomBarContainer}>
    <RewardsBottomTabs.Screen name={Screen.REWARDS_TABS} component={RewardsTopTab} />
  </RewardsBottomTabs.Navigator>
);
