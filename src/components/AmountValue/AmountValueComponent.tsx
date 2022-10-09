import React, { FC } from 'react';

type Props = {
  children: number;
};

export const AmountValueComponent: FC<Props> = ({ children }) => <>${children}</>;
