import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './RewardsBottomBarStyles';

type Props = {
  handlePress: () => void;
};

export const RewardsBottomBarView: FC<Props> = ({ handlePress }) => (
  <TouchableOpacity style={styles.floatingActionButton} onPress={handlePress}>
    <Text style={styles.floatingActionButtonTitle}>+</Text>
  </TouchableOpacity>
);
