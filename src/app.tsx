import React from 'react';
import { RecoilRoot } from 'recoil';

import { AppNavigation } from './navigation';

export const App = () => (
  <RecoilRoot>
    <AppNavigation />
  </RecoilRoot>
);
