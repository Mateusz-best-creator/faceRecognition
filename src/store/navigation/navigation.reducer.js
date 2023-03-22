import { NAVIGATION_ACTIONS_TYPES } from "./navigation.types"

const INITIAL_STATE = {
    currentDirection: 'sign-in',
}

export const navigationReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case NAVIGATION_ACTIONS_TYPES.SET_WHERE_WE_ARE:
            return {
                ...state,
                currentDirection: payload,
            }
        default:
            return state;
    }
}