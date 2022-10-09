import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

export const withSafeArea =
  <P extends Record<string, unknown>>(Component: FC<P>) =>
  (props: P) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Component {...props} />
      </SafeAreaView>
    );
  };
