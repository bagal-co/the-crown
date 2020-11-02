import { createSelector } from 'reselect';
const selectUser = state => state.user;
export const selectoCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);