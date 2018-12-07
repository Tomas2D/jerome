import { Locale, Action } from '../types';
import actionTypes from './actionTypes';

export function setLocale(locale: Locale): Action {
    return {
        type: actionTypes.SET_LOCALE,
        locale,
    };
}

export function getLocale(): Action {
    return {
        type: actionTypes.GET_LOCALE,
    };
}
