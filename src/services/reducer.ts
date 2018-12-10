import { LocaleState, Action } from '../types';
import types from './actionTypes';

export default (locale: string) => (
    state: LocaleState = {
        locale,
    },
    action: Action,
) => {
    switch (action.type) {
        case types.SET_LOCALE:
            return {
                ...state,
                locale: action.locale,
            };
        case types.GET_LOCALE:
            return {
                ...state,
                locale: state.locale,
            };
        default:
            return state;
    }
};
