import { atom } from 'recoil';

import { USER } from '../../constants/sessionContstants';

type SessionState = {
  user: string;
};

export const sessionState = atom<SessionState>({
  key: 'Session',
  default: { user: USER }
});
