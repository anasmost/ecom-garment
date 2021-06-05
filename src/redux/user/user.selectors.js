import { memoize, pipe } from "../../utils/utils";

const selectUser = state => state.user;

export const selectCurrentUser = pipe(
  selectUser,
  memoize(user => user.currentUser)
);