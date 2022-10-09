import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const RewardsMyView: FC<Props> = ({ children }) => (
  <>{children}</>
);
