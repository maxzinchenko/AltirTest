import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Reward } from '../../types/rewardsTypes';
import { rewardsState } from './rewardsState';
import { currentUserState } from '../Session/sessionSelectors';

type Props = Pick<Reward, 'message' | 'receiver' | 'amount'>;

export const useCreateRewardAction = () => {
  const author = useRecoilValue(currentUserState);
  const setRewards = useSetRecoilState(rewardsState);

  return useCallback((payload: Props) => {
    setRewards((prevState) => [{ ...payload, timestamp: Date.now(), author }, ...prevState]);
  }, []);
};
