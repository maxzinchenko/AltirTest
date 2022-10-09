import React, { FC } from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './AvatarStyles';

type Props = Omit<ImageProps, 'source'> & {
  src?: string;
};

export const AvatarComponent: FC<Props> = ({ src, style, ...props }) => (
  <Image
    style={[styles.avatar, style]}
    source={src ? { uri: src } : require('../../assets/Images/avatar-placeholder.png')}
    {...props}
  />
);
