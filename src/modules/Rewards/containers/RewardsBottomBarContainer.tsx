import React, { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Screen } from '../../../constants/screenConstants';
import { RewardsBottomBarView } from '../views/BottomBar/RewardsBottomBarView';

export const RewardsBottomBarContainer: FC<BottomTabBarProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate(Screen.MODAL_REWARDS_CREATE);
  };

  return <RewardsBottomBarView handlePress={handlePress} />;
};
