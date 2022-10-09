import { atom } from 'recoil';

import { USERS } from '../../constants/usersContstants';
import { Reward } from '../../types/rewardsTypes';

export const rewardsState = atom<Reward[]>({
  key: 'Rewards',
  default: [
    {
      receiver: USERS[2],
      sender: USERS[1],
      amount: 100,
      message: 'Some text',
      timestamp: new Date('2022-01-23').getTime()
    },
    {
      receiver: USERS[2],
      sender: USERS[0],
      amount: 50,
      message: 'Some text',
      timestamp: new Date('2021-03-12').getTime()
    },
    {
      receiver: USERS[0],
      sender: USERS[1],
      amount: 400,
      message: 'Some text',
      timestamp: new Date('2020-05-04').getTime()
    },
    {
      receiver: USERS[1],
      sender: USERS[2],
      amount: 200,
      message: 'Some text',
      timestamp: new Date('2019-06-28').getTime()
    },
    {
      receiver: USERS[2],
      sender: USERS[1],
      amount: 600,
      message: 'Some text',
      timestamp: new Date('2018-08-10').getTime()
    }
  ]
});
