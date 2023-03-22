import {createSelector} from 'reselect'

const selectNavigation = (state) => {
    return state.navigation;
}

export const selectCurrentNavigation = createSelector(
    [selectNavigation],
    (nav) => nav.currentDirection
)