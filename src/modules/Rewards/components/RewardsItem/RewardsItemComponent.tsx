import React, { FC } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { Reward } from '../../../../types/rewardsTypes';
import { AvatarComponent } from '../../../../components/Avatar/AvatarComponent';
import { DateValueComponent } from '../../../../components/DateValue/DateValueComponent';
import { BoldTextComponent } from '../../../../components/BoldText/BoldTextComponent';

import { styles } from './RewardsItemStyles';
import { AmountValueComponent } from "../../../../components/AmountValue/AmountValueComponent";

export type Props = Reward & {
  style: StyleProp<ViewStyle>;
  isUserReceiver?: boolean;
};

export const RewardsItemComponent: FC<Props> = ({
  style,
  receiver,
  sender,
  message,
  timestamp,
  amount,
  isUserReceiver
}) => (
  <View style={[styles.reward, style]}>
    <AvatarComponent style={styles.rewardAvatar} src={receiver.avatar} />

    <View style={styles.rewardContent}>
      <Text style={styles.rewardMessage}>{message}</Text>

      <Text style={styles.rewardAction}>
        <BoldTextComponent>{isUserReceiver ? 'You' : receiver.name}</BoldTextComponent> rewarded by{' '}
        <BoldTextComponent>{sender.name}</BoldTextComponent>
        {isUserReceiver ? (
          <Text>
            {' '}
            and received{' '}
            <BoldTextComponent>
              <AmountValueComponent>{amount}</AmountValueComponent>
            </BoldTextComponent>
          </Text>
        ) : null}
      </Text>

      <Text style={styles.rewardDate}>
        <DateValueComponent>{timestamp}</DateValueComponent>
      </Text>
    </View>
  </View>
);
