import 'babel-polyfill';
import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FormattedMessage, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';
import cs_CZ from 'antd/lib/locale-provider/cs_CZ';
import en_US from 'antd/lib/locale-provider/en_US';

import { Pagination } from 'antd';

import { storiesOf } from '@storybook/react';
import { Locale } from '../types';

import 'antd/es/pagination/style/index.less';

import translatable from './translatableFactory';

addLocaleData([...cs]);

const messages = {
    cs: {
        foo: 'Ano, ja jsem foo',
        'bar.baz': 'Ne, ja jsem bar baz',
        text: 'Čus, já jsem volitelný text',
    },
    en: {
        foo: 'Yeah, I am foo',
        'bar.baz': 'No, I am bar baz',
        text: 'Hello, I am custom text',
    },
};

const antdLocales = {
    cs: cs_CZ,
    en: en_US,
};

const initialState = {
    translate: { locale: 'cs' },
};

const store = createStore((state = initialState, action: any) => {
    if (action.type === 'CHANGE_LOCALE') {
        return {
            translate: { locale: action.locale },
        };
    }
    return state;
});

const localeChangeHandler = (e: SyntheticEvent<{ value: string }>) =>
    store.dispatch({
        type: 'CHANGE_LOCALE',
        locale: e.currentTarget.value,
    });

interface Props {
    locale: Locale;
    text?: React.ReactNode;
}

const ContentComponent: React.SFC<Props> = ({ locale, text }) => (
    <div>
        {['cs', 'en'].map(lang => (
            <div key={lang}>
                {lang}{' '}
                <input
                    type="radio"
                    name="locale"
                    value={lang}
                    checked={lang === locale}
                    onChange={localeChangeHandler}
                />
            </div>
        ))}
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
        <h1>
            <FormattedMessage id="foo" />
        </h1>
        <h2>
            <FormattedMessage id="bar.baz" />
        </h2>
        <p>{text}</p>
    </div>
);

ContentComponent.propTypes = {
    locale: PropTypes.string.isRequired,
    text: PropTypes.node,
};

ContentComponent.defaultProps = {
    text: null,
};

storiesOf('HOC|translatable', module).add('simple', () => {
    const TranslatableComponent = translatable(messages, antdLocales)(ContentComponent);
    return (
        <Provider store={store}>
            <TranslatableComponent text={<FormattedMessage id="text" />} />
        </Provider>
    );
});
