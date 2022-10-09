import React from 'react';
import { useRecoilValue } from 'recoil';

import { rewardsState } from '../../../store/Rewards/rewardsState';
import { RewardsListComponent } from '../components/RewardsList/RewardsListComponent';
import { RewardsFeedView } from '../views/Feed/RewardsFeedView';

export const RewardsFeedContainer = () => {
  const rewards = useRecoilValue(rewardsState);

  return (
    <RewardsFeedView>
      <RewardsListComponent rewards={rewards} />
    </RewardsFeedView>
  );
};
