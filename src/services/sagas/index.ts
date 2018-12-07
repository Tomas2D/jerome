import { Action } from '../../types';
import { takeEvery, all, put } from 'redux-saga/effects';

import { setLocale } from '../actions';
import types from '../actionTypes';
import { localStorageHandlers } from '../utilities';

function saveLocaleToLocalStorage(action: Action) {
    const { locale } = action;
    localStorageHandlers.saveLocale(locale);
}

function* retreiveLocaleFromLocaleStorage() {
    const locale = localStorageHandlers.loadLocale();

    if (locale) {
        yield put(setLocale(locale));
    }
}

export default function*() {
    yield all([
        takeEvery(types.SET_LOCALE, saveLocaleToLocalStorage),
        retreiveLocaleFromLocaleStorage(),
    ]);
}
