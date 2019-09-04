import { LocaleState, Action } from '../types';
import types from './actionTypes';

import { isBrowserEnv } from '../config';

const getInitialLanguage = (languages: string | string[]): string => {
    let language = languages[0];
    const lang = isBrowserEnv ? window.navigator.language : language;
    const langSplitted = lang.split('-')[0];

    if (typeof languages === 'string') {
        language = languages;
    } else if (languages.includes(lang)) {
        language = lang;
    } else if (languages.includes(langSplitted)) {
        language = langSplitted;
    }

    return language;
};

const reducerFactory = (languages: string | string[]) => (
    state: LocaleState = {
        locale: getInitialLanguage(languages),
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
            return state;
        default:
            return state;
    }
};

export default reducerFactory;
