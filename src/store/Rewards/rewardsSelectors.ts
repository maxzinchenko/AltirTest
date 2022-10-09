import { selector } from 'recoil';

import { currentUserState } from '../Session/sessionSelectors';
import { rewardsState } from './rewardsState';

export const myRewardsState = selector({
  key: 'RewardsMy',
  get: ({ get }) => {
    const user = get(currentUserState);

    return get(rewardsState).filter((reward) => reward.receiver.name === user.name);
  }
});

export const receivedRewardsAmountState = selector({
  key: 'RewardsReceivedAmount',
  get: ({ get }) => {
    return get(myRewardsState).reduce((acc, { amount }) => acc + amount, 0);
  }
});

export const givenRewardsAmountState = selector({
  key: 'RewardsGivenAmount',
  get: ({ get }) => {
    const user = get(currentUserState);

    return get(rewardsState)
      .filter((reward) => reward.sender.name === user.name)
      .reduce((acc, { amount }) => acc + amount, 0);
  }
});

export const allowedRewardsAmountState = selector({
  key: 'RewardsAllowedAmount',
  get: ({ get }) => {
    const received = get(receivedRewardsAmountState);
    const given = get(givenRewardsAmountState);

    return received - given;
  }
});
