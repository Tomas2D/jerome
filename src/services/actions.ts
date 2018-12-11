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

export const createIntlProvider = (payload = {}): Action => ({
    type: actionTypes.CREATE_INTL_PROVIDER,
    payload,
});

export const destroyIntlProvider = (): Action => ({
    type: actionTypes.DESTROY_INTL_PROVIDER,
});
