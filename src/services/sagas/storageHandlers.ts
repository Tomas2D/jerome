import { Action } from '../../types';
import { takeEvery, all, put } from 'redux-saga/effects';
import localforage from 'localforage';

import { LOCALE_KEY } from '../../constants';
import { logger } from '../../config';

import { setLocale } from '../actions';
import types from '../actionTypes';

function* saveLocaleToLocalStorage(action: Action) {
    try {
        yield localforage.setItem(LOCALE_KEY, action.locale);
    } catch (e) {
        logger.error(e);
    }
}

function* retrieveLocaleFromLocaleStorage() {
    try {
        const locale = yield localforage.getItem(LOCALE_KEY);

        if (locale) {
            yield put(setLocale(locale));
        }
    } catch (e) {
        logger.error(e);
    }
}

export default function*() {
    yield all([takeEvery(types.SET_LOCALE, saveLocaleToLocalStorage), retrieveLocaleFromLocaleStorage()]);
}
