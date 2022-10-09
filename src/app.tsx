import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { AppNavigation } from './navigation';

export const App = () => (
  <SafeAreaProvider>
    <RecoilRoot>
      <AppNavigation />
    </RecoilRoot>
  </SafeAreaProvider>
);
