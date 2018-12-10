import actionTypes from './services/actionTypes';

export type Locale = string;

export interface LocaleState {
    locale: Locale;
}

export interface State {
    translate: LocaleState;
}

export interface Action {
    type: actionTypes;
    [extraProps: string]: any;
}

export interface LocaleData<T = {}> {
    [locale: string]: object & T;
}
