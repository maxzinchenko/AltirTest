import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { USERS } from '../../constants/usersContstants';
import { rewardsCreateDisabledState, rewardsState } from './rewardsState';
import { currentUserState } from '../Session/sessionSelectors';

type Props = {
  message: string;
  amount: string;
  receiver: string;
};

export const useCreateRewardAction = () => {
  const sender = useRecoilValue(currentUserState);
  const setRewards = useSetRecoilState(rewardsState);

  return useCallback((payload: Props) => {
    const receiver = USERS.find(({ name }) => name === payload.receiver) || { name: payload.receiver };
    console.log({ receiver });
    const reward = { ...payload, receiver: receiver, amount: Number(payload.amount), timestamp: Date.now(), sender };

    setRewards((prevState) => [reward, ...prevState]);
  }, []);
};

export const useSetCreateRewardDisabledAction = () => {
  return useSetRecoilState(rewardsCreateDisabledState);
};
