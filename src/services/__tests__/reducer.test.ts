import reducerFactory from '../reducer';
import { getLocale } from '../actions';

describe('Reducer factory', () => {
    beforeEach(() => {
        window.navigator = { language: 'en-US' };
    });

    it('should use supplied language as a default', () => {
        const state = reducerFactory('cs')(undefined, getLocale());

        expect(state.locale).toEqual('cs');
    });

    it('should use first language if navigator language not found in list of languages', () => {
        const state = reducerFactory(['fr', 'cs'])(undefined, getLocale());

        expect(state.locale).toEqual('fr');
    });

    it('should use navigator language if found in list of languages', () => {
        const state = reducerFactory(['fr', 'en', 'cs'])(undefined, getLocale());

        expect(state.locale).toEqual('en');
    });
});
