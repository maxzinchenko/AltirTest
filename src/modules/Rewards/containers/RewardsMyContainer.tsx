import React from 'react';
import { useRecoilValue } from 'recoil';

import { myRewardsState } from '../../../store/Rewards/rewardsSelectors';
import { RewardsListComponent } from '../components/RewardsList/RewardsListComponent';
import { RewardsMyView } from '../views/My/RewardsMyView';

export const RewardsMyContainer = () => {
  const rewards = useRecoilValue(myRewardsState);

  return (
    <RewardsMyView>
      <RewardsListComponent rewards={rewards} isUserReceiver />
    </RewardsMyView>
  );
};
