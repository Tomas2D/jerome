import { LocaleState, Action } from '../types';
import types from './actionTypes';

import { isBrowserEnv } from '../config';

const getInitialLanguage = (languages: string[]): string => {
    let language = languages[0];
    const lang = isBrowserEnv ? window.navigator.language : language;
    const langSplitted = lang.split('-')[0];

    if (languages.includes(lang)) {
        language = lang;
    } else if (languages.includes(langSplitted)) {
        language = langSplitted;
    }

    return language;
};

const reducerFactory = (languages: string|string[]) => {
    const language = Array.isArray(languages) ? getInitialLanguage(languages) : languages;
    const initialState: LocaleState = {
        locale: language,
    };

    return (state: LocaleState = initialState, action: Action) => {
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
};

export default reducerFactory;
