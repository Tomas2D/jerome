![ackee|Jerome](./assets/ackee_git_frontend_jerome.png)

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AckeeCZ/jerome/blob/master/LICENSE) [![CI Status](https://img.shields.io/travis/com/AckeeCZ/jerome.svg?style=flat)](https://travis-ci.com/AckeeCZ/jerome) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) [![Dependency Status](https://img.shields.io/david/AckeeCZ/jerome.svg?style=flat-square)](https://david-dm.org/AckeeCZ/jerome)


# Jerome

> Localization module useful mainly for frontend development in Ackee.

## Installation

`npm i -s @ackee/jerome`

## Usage

All parts are independent, but best works all together. Don't forget that for correct usage of selectors your reducer have to be stored with `translate` key (as in example).

## Actions

### `setLocale`

```js
import { setLocale } from '@ackee/jerome';


dispatch(setLocale('cs'));
```

### `getLocale`


## Reducer

Reducer is actually reducer factory since you must provide default locale first.

```js
import { reducer as translateFactory } from '@ackee/jerome';

const translate = translateFactory('cs');

const appReducers = combineReducers({
    translate,
    ...
});

```

## Selectors

### `translateSelector`

Select `translate` part of store.

```js
import { translateSelector } from '@ackee/jerome';

translateSelector(state); // { locale: 'cs' }

```

## Saga

The saga has two purposes, both related to handling persistent storing of locale. 

* It saves locale on every `SET_LOCALE` action into the persistent storage.
* It loads locale from persistent storage when app load and set it up.

#### Usage

```js
import { saga as localization } from '@ackee/jerome';

const rootSaga = function* () {
    yield all([
        localization(), // plug it into root saga
        ...
    ]);
};

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const middleware = applyMiddleware(...middlewares);

    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
}
```

### `getIntl`
The `getIntl` saga returns an intl object that exactly corresponds to the [`intlShape`](https://github.com/yahoo/react-intl/wiki/API#intlshape).

#### Example
```js
import { getIntl } from '@ackee/jerome';

function* mySaga() {
    const intl = yield getIntl();

    const translatedMessage = intl.formatMessage({
        id: 'hello'
    });
}
```


## `translatable` HOC

It's actually a translatable HOC factory function. It provides `reac-intl` and `antd` localization context, so you first have to provide localization messages and `antd` locale data.

`translatable(intlLocaleData, antdLocaleData): (ContentComponent) => TranslatableContentComponent`

> ![Important](../../../docs/alert-icon.png "Improtant note")
To make HOC works properly, you must have `react-intl` installed just once!

#### Arguments
1. `intlLocaleData`: object with messages keyed by locale name, eg.


```js
const messages = {
    cs: {
        hello: 'Dobry den',
        ...
    },
    en: {
        hello: 'Hello',
        ...
    },
}
```

2. `intlLocaleData`: object with antd locales keyed by locale name. eg.

```js
import cs_CZ from 'antd/lib/locale-provider/cs_CZ';
import en_US from 'antd/lib/locale-provider/en_US';

const messages = {
    cs: cs_CZ,
    en: en_US,
}
```

#### Returns
Function that receives `ContentComponent` and return it wrapped with [IntlProvider](https://github.com/yahoo/react-intl/wiki/Components#intlprovider) and set locale to that given from
`store.translate.locale` store path.

> To make everything work properly you also need to set locale data using `addLocaleData` function from
`react-intl` package. See the snippet example below for example of how to do it.

#### Example

```jsx
import { FormattedMessage, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';

import cs_CZ from 'antd/lib/locale-provider/cs_CZ';
import en_US from 'antd/lib/locale-provider/en_US';

import { translatableHOC } from '@ackee/jerome';

addLocaleData([...cs]);

const ContentComponent = () => (
    <div id="app">
        <h1><FormattedMessage id="hello" /></h1>
        <h2><FormattedMessage id="bye.instant" /></h2>
        <h3><FormattedMessage id="bye.forever" /></h3>
    </div>
);

const messages = {
    cs: {
        hello: 'Cau',
        'bye.instant': 'Nashledanou',
        'bye.forever': 'Sbohem',
    },
};

const antdMessages = {
    cs: cs_CZ,
    en: en_US,
}

const store = createStore((state = initialState) => ({
    translate: { locale: 'cs' },
}));

TranslatableComponent = translatableHOC(messages, antdMessages)(ContentComponent);

ReactDOM.render(<TranslatableComponent store={store} />, document.getElementById('app'));
```

## Utilities

### `saveLocale`

Used for persistent store of locale setting.

```js
import { saveLocale } from '@ackee/jerome';

saveLocale('cs');
```

### `loadLocale`

Used for getting locale setting from persistent storage.

```js
import { loadLocale } from '@ackee/jerome';

loadLocale(); // 'cs'
```

### `localStorageHandlers`

Covers both utilities mentioned above.

```js
import { localStorageHandlers } from '@ackee/jerome';

localStorageHandlers.saveLocale('en');
localStorageHandlers.loadLocale(); // 'en'
```


