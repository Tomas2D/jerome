import { Locale, Action } from '../types';
import actionTypes from './actionTypes';

export function setLocale(locale: Locale): Action {
    return {
        locale,
        type: actionTypes.SET_LOCALE,
    };
}

export function getLocale(): Action {
    return {
        type: actionTypes.GET_LOCALE,
    };
}

export const createIntlProvider = (payload = {}): Action => ({
    payload,
    type: actionTypes.CREATE_INTL_PROVIDER,
});

export const destroyIntlProvider = (): Action => ({
    type: actionTypes.DESTROY_INTL_PROVIDER,
});

export { actionTypes };
