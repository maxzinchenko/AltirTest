import React, { FC } from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './RewardsBottomBarStyles';

type Props = {
  style?: StyleProp<ViewStyle>;
  handlePress: () => void;
};

export const RewardsBottomBarView: FC<Props> = ({ style, handlePress }) => (
  <TouchableOpacity style={[styles.floatingActionButton, style]} onPress={handlePress}>
    <Text style={styles.floatingActionButtonTitle}>+</Text>
  </TouchableOpacity>
);
