import 'babel-polyfill';
import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FormattedMessage, FormattedHTMLMessage, FormattedRelativeTime } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { Locale } from '../types';

import translatable from './translatableFactory';

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
    },
    en: {
        foo: 'Yeah, I am foo',
        'bar.baz': 'No, I am bar baz',
        text: 'Hello, I am custom text',
        htmlText: 'Hi i\'m <a href="http://ackee.de" target="_blank">link</a>',
    },
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
    });
