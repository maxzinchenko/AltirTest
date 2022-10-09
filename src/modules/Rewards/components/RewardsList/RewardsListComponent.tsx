import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';

import { Reward } from '../../../../types/rewardsTypes';
import { RewardsItemComponent } from '../RewardsItem/RewardsItemComponent';

import { styles } from './RewardsListStyles';

type Props = {
  rewards: Reward[];
  isUserReceiver?: boolean;
};

export const RewardsListComponent: FC<Props> = ({ rewards, isUserReceiver }) => {
  const renderItem = useCallback(
    ({ index, item }: any) => (
      <RewardsItemComponent style={[!!index && styles.rewardNotFirst]} isUserReceiver={isUserReceiver} {...item} />
    ),
    [isUserReceiver]
  );

  return (
    <FlatList
      style={styles.rewardsList}
      contentContainerStyle={styles.rewardsContainer}
      maxToRenderPerBatch={15}
      scrollIndicatorInsets={{ top: 0.001 }}
      data={rewards}
      renderItem={renderItem}
    />
  );
};
