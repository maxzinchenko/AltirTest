import { atom } from 'recoil';

import { USERS } from '../../constants/usersContstants';
import { Employee } from '../../types/employeesTypes';

type SessionState = {
  user: Employee;
};

export const sessionState = atom<SessionState>({
  key: 'Session',
  default: { user: USERS[0] }
});
