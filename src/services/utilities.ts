import { Locale } from '../types';

export const loadLocale = (): Locale|null => localStorage.getItem('locale');

export const saveLocale = (locale: Locale) => {
    localStorage.setItem('locale', locale);
};

export const localStorageHandlers = {
    loadLocale,
    saveLocale,
};
