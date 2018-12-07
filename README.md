# Jerome

## Usage

All parts are independent, but best works all together. Don't forget that for correct usage of selectors your reducer have to be stored with `translate` key (as in example).

## Actions

### `setLocale`

```js
import { setLocale } from 'ackee-frontend-toolkit/es/modules/localization';

dispatch(setLocale('cs'));
```

### `getLocale`


## Reducer

Reducer is actually reducer factory since you must provide default locale first.

```js
import { reducer as translateFactory } from 'ackee-frontend-toolkit/es/modules/localization';

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
import { translateSelector } from 'ackee-frontend-toolkit/es/modules/localization';

translateSelector(state); // { locale: 'cs' }

```

## Saga

The saga has two purposes, both related to handling persistent storing of locale. 

* It saves locale on every `SET_LOCALE` action into the persistent storage. Second
* It loads locale from persistent storage when app load and set it up.

**Usage**

```js
import { saga as localization } from 'ackee-frontend-toolkit/es/modules/localization';

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

import { translatableHOC } from 'ackee-frontend-toolkit/es/modules/localization';

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
import { saveLocale } from 'ackee-frontend-toolkit/es/modules/localization';

saveLocale('cs');
```

### `loadLocale`

Used for getting locale setting from persistent storage.

```js
import { loadLocale } from 'ackee-frontend-toolkit/es/modules/localization';

loadLocale(); // 'cs'
```

### `LocalStorageHandlers`

Covers both utilities mentioned above.

```js
import { LocalStorageHandlers } from 'ackee-frontend-toolkit/es/modules/localization';

LocalStorageHandlers.saveLocale('en');
LocalStorageHandlers.loadLocale(); // 'en'
```


