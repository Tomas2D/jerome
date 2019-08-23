import { Action, Store } from '../../types';
import { select, takeEvery, call, take, race } from 'redux-saga/effects';
import { createIntl, createIntlCache } from 'react-intl';

import types from '../actionTypes';
import { translateSelector } from '../selectors';

const store: Store = {
    locale: null,
    intl: null,
    intlData: {},
};

function* createIntlProvider() {
    if (!store.intlData) {
        yield take(types.CREATE_INTL_PROVIDER);
    }

    const { locale } = yield select(translateSelector);

    if (store.locale === locale && store.intl) {
        return;
    }

    store.locale = locale;

    const intlConfig = {
        locale,
        key: locale,
        messages: store.intlData[locale],
    };

    const cache = createIntlCache();
    const intl = createIntl(intlConfig, cache);

    store.intl = intl;
}

export function* getIntl() {
    if (!store.intl) {
        yield createIntlProvider();
    }

    return store.intl;
}

function* initializedIntlProvider(action: Action) {
    store.intlData = action.payload.intlData;

    yield call(createIntlProvider);

    yield takeEvery(types.SET_LOCALE, createIntlProvider);
}

function cleanUp() {
    store.intl = null;
    store.intlData = {};
    store.locale = null;
}

export default function* intlProviderFlow() {
    while (true) {
        const action = yield take(types.CREATE_INTL_PROVIDER);

        const result = yield race({
            task: call(initializedIntlProvider, action),
            cancel: take(types.DESTROY_INTL_PROVIDER),
        });

        if (!result.cancel) {
            yield take(types.DESTROY_INTL_PROVIDER);
        }

        cleanUp();
    }
}
