import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const RewardsFeedView: FC<Props> = ({ children }) => (
  <>{children}</>
);
