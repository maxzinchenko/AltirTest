import React, { FC } from 'react';

type Props = {
  children: number;
};

export const DateValueComponent: FC<Props> = ({ children }) => <>{new Date(children).toLocaleString('en-SE')}</>;
