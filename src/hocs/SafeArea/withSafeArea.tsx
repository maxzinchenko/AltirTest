import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

export const withSafeArea =
  <P extends Record<string, unknown>>(Component: FC<P>) =>
  (props: P) => {
    return (
      <SafeAreaView>
        <Component {...props} />
      </SafeAreaView>
    );
  };
