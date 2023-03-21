import { createSelector } from "reselect";

const selectUserBasic = (store) => {
    return store.user;
}

export const selectCurrentUser = createSelector(
    [selectUserBasic],
    (user) => user.currentUser
)

