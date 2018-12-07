import { State, LocaleState } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const translateSelector = (state: State): LocaleState => state.translate;
