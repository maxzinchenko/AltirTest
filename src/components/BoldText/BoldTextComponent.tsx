import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './BoldTextStyles';

export const BoldTextComponent: FC<TextProps> = ({ style, ...props }) => (
  <Text style={[styles.boldText, style]} {...props} />
);
