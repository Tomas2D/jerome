import { Action } from '../../types';
import { sagaEffects } from '../../dependencies';

import { setLocale } from '../actions';
import types from '../actionTypes';
import { localStorageHandlers } from '../utilities';

const { takeEvery, all, put } = sagaEffects;

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
