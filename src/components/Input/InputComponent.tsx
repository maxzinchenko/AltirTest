import React, { FC, useCallback } from 'react';
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { BoldTextComponent } from '../BoldText/BoldTextComponent';
import { ErrorComponent } from '../Error/ErrorComponent';

import { styles } from './InputStyles';

type Props<N extends string = string> = Omit<TextInputProps, 'style' | 'onChangeText'> & {
  style?: StyleProp<ViewStyle>;
  label: string;
  name?: N;
  error: null | string;
  handleTextChange: (value: string, name?: N) => void;
};

export const InputComponent = <N extends string>({
  style,
  label,
  name,
  error,
  handleTextChange,
  ...props
}: Props<N>) => {
  const handleChange = useCallback(
    (value: string) => {
      handleTextChange(value, name);
    },
    [name]
  );

  return (
    <View style={[styles.inputContainer, style]}>
      <BoldTextComponent style={styles.inputLabel}>{label}</BoldTextComponent>

      <TextInput {...props} style={styles.input} onChangeText={handleChange} placeholderTextColor="#AEAEAE" />

      <ErrorComponent style={styles.inputError}>{error}</ErrorComponent>
    </View>
  );
};
