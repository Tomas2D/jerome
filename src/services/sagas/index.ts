import { all } from 'redux-saga/effects';

import intlProvider from './intlProvider';
import storageHandlers from './storageHandlers';

export { getIntl } from './intlProvider';

export default function*() {
    yield all([intlProvider(), storageHandlers()]);
}
