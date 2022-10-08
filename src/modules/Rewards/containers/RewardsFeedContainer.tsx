import React from 'react';
import { FlatList, Image, Text, View } from "react-native";
import { useRecoilValue } from 'recoil';

import { rewardsState } from '../../../store/Rewards/rewardsState';

export const RewardsFeedContainer = () => {
  const rewards = useRecoilValue(rewardsState);

  return (
    <FlatList
      data={rewards}
      renderItem={({ index, item }) => (
        <View>
          <Image style={{ flex: 1, height: 50, width: 50 }} source={{ uri: 'https://random.imagecdn.app/50/50' }} />
          <Text>{item.message}</Text>
          <Text>
            {item.receiver} rewarded by {item.author}
          </Text>
          <Text>{new Date(item.timestamp).toLocaleString('en-SE')}</Text>
        </View>
      )}
    />
  );
};
