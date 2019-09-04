import 'babel-polyfill';
import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FormattedMessage, FormattedHTMLMessage, FormattedRelativeTime } from 'react-intl';
import cs_CZ from 'antd/es/locale-provider/cs_CZ';
import en_US from 'antd/es/locale-provider/en_US';

import { ConfigProvider, List, Pagination } from 'antd';

import { storiesOf } from '@storybook/react';
import { Locale } from '../types';

import 'antd/es/pagination/style/index.less';

import translatable from './translatableFactory';
import translatableWithAntd from './translatableWithAntdFactory';

if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/dist/locale-data/cs');
}

const messages = {
    cs: {
        foo: 'Ano, ja jsem foo',
        'bar.baz': 'Ne, ja jsem bar baz',
        text: 'Čus, já jsem volitelný text',
        htmlText: 'Čus já jsem <a href="http://ackee.cz" target="_blank">odkaz</a>',
        'custom.empty': 'Tohle je vlastní empty message - test zanořených config providerů',
    },
    en: {
        foo: 'Yeah, I am foo',
        'bar.baz': 'No, I am bar baz',
        text: 'Hello, I am custom text',
        htmlText: 'Hi i\'m <a href="http://ackee.de" target="_blank">link</a>',
        'custom.empty': 'This is custom empty message - test of nested providers',
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
    children?: React.ReactNode;
}

const ContentComponent: React.SFC<Props> = ({ locale, children }) => (
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
        {children}
    </div>
);

ContentComponent.propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

ContentComponent.defaultProps = {
    children: null,
};

storiesOf('HOC|translatable', module)
    .add('simple', () => {
        const TranslatableComponent = translatable(messages)(ContentComponent);
        return (
            <Provider store={store}>
                <TranslatableComponent>
                    <h1>
                        <FormattedMessage id="foo" />
                    </h1>
                    <h2>
                        <FormattedMessage id="bar.baz" />
                    </h2>
                    <p>
                        <FormattedHTMLMessage id="htmlText" />
                    </p>
                    <p>
                        <FormattedRelativeTime value={-20} unit="minute" />
                    </p>
                    <p>
                        <FormattedMessage id="text" />
                    </p>
                </TranslatableComponent>
            </Provider>
        );
    })
    .add('with Antd', () => {
        const TranslatableComponent = translatableWithAntd(messages, antdLocales)(ContentComponent);
        return (
            <ConfigProvider renderEmpty={() => <FormattedMessage id="custom.empty" />}>
                <Provider store={store}>
                    <TranslatableComponent>
                        <p>
                            <FormattedMessage id="foo" />
                        </p>
                        <p>
                            <Pagination defaultCurrent={1} total={50} showSizeChanger />
                        </p>
                        <p>
                            <List dataSource={[]} renderItem={item => item} />
                        </p>
                    </TranslatableComponent>
                </Provider>
            </ConfigProvider>
        );
    });
