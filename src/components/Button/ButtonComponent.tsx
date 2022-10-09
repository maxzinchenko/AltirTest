import React, { FC, ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './ButtonStyles';

type Props = Omit<TouchableOpacityProps, 'children'> & {
  children: string | ReactNode | null;
};

export const ButtonComponent: FC<Props> = ({ style, disabled, children, ...props }) => (
  <TouchableOpacity {...props} style={[styles.button, disabled && styles.buttonDisabled, style]} disabled={disabled}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);
