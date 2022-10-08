import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { myRewardsState } from '../../../store/Rewards/rewardsSelectors';

export const RewardsMyContainer = () => {
  const rewards = useRecoilValue(myRewardsState);

  return (
    <FlatList
      data={rewards}
      renderItem={({ index, item }) => (
        <View>
          <Text>{item.message}</Text>
          <Text>
            {item.receiver} rewarded by {item.author}
          </Text>
          <Text>
            ${item.amount} received
          </Text>
          <Text>{new Date(item.timestamp).toLocaleString('en-SE')}</Text>
        </View>
      )}
    />
  );
};
