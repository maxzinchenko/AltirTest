import React, { FC } from 'react';
import { StyleProp, Text, ViewStyle, View } from 'react-native';

import { styles } from './InputStyles';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: string | null;
};

export const ErrorComponent: FC<Props> = ({ style, children }) => {
  return children ? (
    <View style={[styles.errorContainer, style]}>
      <Text style={styles.errorText}>{children}</Text>
    </View>
  ) : null;
};
