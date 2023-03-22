import { NAVIGATION_ACTIONS_TYPES } from "./navigation.types";

export const setCurrentDirection = (direction) => {
    return {type: NAVIGATION_ACTIONS_TYPES.SET_WHERE_WE_ARE, payload: direction};
}