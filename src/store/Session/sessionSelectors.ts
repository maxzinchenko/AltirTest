import { selector } from 'recoil';
import { sessionState } from './sessionState';

export const currentUserState = selector({
  key: 'SessionUser',
  get: ({ get }) => get(sessionState).user
});
