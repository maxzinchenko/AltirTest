import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { HeaderTitleProps } from '@react-navigation/elements/lib/typescript/src/types';

import { currentUserState } from '../../../store/Session/sessionSelectors';
import { givenRewardsAmountState, receivedRewardsAmountState } from '../../../store/Rewards/rewardsSelectors';
import { RewardsHeaderView } from '../views/Header/RewardsHeaderView';

export const RewardsHeaderContainer: FC<HeaderTitleProps> = ({ style, ...props }) => {
  const user = useRecoilValue(currentUserState);
  const received = useRecoilValue(receivedRewardsAmountState);
  const given = useRecoilValue(givenRewardsAmountState);

  return <RewardsHeaderView style={style} user={user} given={given} received={received} {...props} />;
};
