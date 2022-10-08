import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen } from './constants/screenConstants';
import { RewardsNavigation } from './modules/Rewards/navigation/RewardsNavigation';

const AppStack = createNativeStackNavigator();
export const AppNavigation = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      {/* Main */}
      <AppStack.Group>
        <AppStack.Screen name={Screen.REWARDS} component={RewardsNavigation} />
      </AppStack.Group>

      {/* Lazy Modals */}
      <AppStack.Group screenOptions={{ presentation: 'modal' }}>
        <AppStack.Screen
          name={Screen.MODAL_REWARDS_CREATE}
          getComponent={() => require('./modules/Rewards/screens/RewardsCreateScreen').default}
        />
      </AppStack.Group>
    </AppStack.Navigator>
  </NavigationContainer>
);
