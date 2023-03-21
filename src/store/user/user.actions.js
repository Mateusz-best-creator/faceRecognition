import { USER_ACTIONS_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
    return {type: USER_ACTIONS_TYPES.SET_CURRENT_USER, payload: user};
}