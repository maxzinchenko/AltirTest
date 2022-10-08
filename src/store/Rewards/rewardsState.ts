import { atom } from 'recoil';

import { USER } from '../../constants/sessionContstants';
import { Reward } from '../../types/rewardsTypes';

export const rewardsState = atom<Reward[]>({
  key: 'Rewards',
  default: [
    {
      receiver: USER,
      author: 'David Greene',
      amount: 100,
      message: 'Some text',
      timestamp: new Date('2022-01-23').getTime()
    },
    {
      receiver: 'Alex Brown',
      author: USER,
      amount: 50,
      message: 'Some text',
      timestamp: new Date('2021-03-12').getTime()
    },
    {
      receiver: USER,
      author: 'Alex Brown',
      amount: 400,
      message: 'Some text',
      timestamp: new Date('2020-05-04').getTime()
    },
    {
      receiver: 'David Greene',
      author: 'Alex Brown',
      amount: 200,
      message: 'Some text',
      timestamp: new Date('2019-06-28').getTime()
    },
    {
      receiver: 'Alex Brown',
      author: 'David Greene',
      amount: 600,
      message: 'Some text',
      timestamp: new Date('2018-08-10').getTime()
    }
  ]
});
