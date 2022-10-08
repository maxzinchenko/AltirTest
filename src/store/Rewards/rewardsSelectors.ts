import { selector } from 'recoil';

import { currentUserState } from '../Session/sessionSelectors';
import { rewardsState } from './rewardsState';

export const myRewardsState = selector({
  key: 'RewardsMy',
  get: ({ get }) => {
    const user = get(currentUserState);

    return get(rewardsState).filter((reward) => reward.receiver === user);
  }
});

export const receivedRewardsAmountState = selector({
  key: 'RewardsReceivedAmount',
  get: ({ get }) => {
    const user = get(currentUserState);

    return get(rewardsState)
      .filter((reward) => reward.receiver === user)
      .reduce((acc, { amount }) => acc + amount, 0);
  }
});

export const givenRewardsAmountState = selector({
  key: 'RewardsGivenAmount',
  get: ({ get }) => {
    return get(myRewardsState).reduce((acc, { amount }) => acc + amount, 0);
  }
});
