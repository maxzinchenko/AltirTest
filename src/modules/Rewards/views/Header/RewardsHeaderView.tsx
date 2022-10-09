import React, { FC } from 'react';
import { Text, View, Animated } from 'react-native';
import { HeaderTitleProps } from '@react-navigation/elements/lib/typescript/src/types';

import { Employee } from '../../../../types/employeesTypes';
import { AvatarComponent } from '../../../../components/Avatar/AvatarComponent';
import { AmountValueComponent } from '../../../../components/AmountValue/AmountValueComponent';
import { BoldTextComponent } from '../../../../components/BoldText/BoldTextComponent';

import { styles } from './RewardsHeaderStyles';

type Props = HeaderTitleProps & {
  user: Employee;
  received: number;
  given: number;
};

export const RewardsHeaderView: FC<Props> = ({ style, user, received, given, ...props }) => (
  <Animated.View style={[styles.rewardsHeader, style]} {...props}>
    <AvatarComponent style={styles.rewardsHeaderAvatar} src={user.avatar} />

    <View style={styles.rewardsHeaderContent}>
      <BoldTextComponent style={styles.rewardsHeaderName}>{user.name}</BoldTextComponent>

      <Text style={styles.rewardsHeaderStats}>
        Given{' '}
        <BoldTextComponent>
          <AmountValueComponent>{given}</AmountValueComponent>
        </BoldTextComponent>{' '}
        / Received{' '}
        <BoldTextComponent>
          <AmountValueComponent>{received}</AmountValueComponent>
        </BoldTextComponent>
      </Text>
    </View>
  </Animated.View>
);
