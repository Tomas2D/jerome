import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connectWorker } from '@ackee/redux-worker/main';
import { IntlProvider } from 'react-intl';
import getDisplayName from 'react-display-name';
import LocaleProvider, { Locale as AntdLocaleData } from 'antd/lib/locale-provider';

import { LocaleData, LocaleState } from '../types';

import { createIntlProvider, destroyIntlProvider } from '../services/actions';

import { BRIDGE_ID } from '../constants';

interface WrappedProps extends LocaleState {
    [extraProps: string]: any;
}

function Loader() {
    return <div>Loading Translatable component...</div>;
}

const translatableFactory = (intlLocaleData: LocaleData, antdLocaleData: LocaleData<AntdLocaleData>): any => {
    return (TranslatableComponent: React.ComponentType<WrappedProps>) => {
        class Translatable extends Component<WrappedProps> {
            static displayName = `Translatable(${getDisplayName(TranslatableComponent)})`;

            static propTypes = {
                locale: PropTypes.string.isRequired,
                createIntlProvider: PropTypes.func.isRequired,
                destroyIntlProvider: PropTypes.func.isRequired,
            };

            componentDidMount() {
                this.props.createIntlProvider({
                    intlData: intlLocaleData,
                });
            }

            componentWillUnmount() {
                this.props.destroyIntlProvider();
            }

            render() {
                const { locale } = this.props;
                const intlProviderProps = {
                    locale,
                    key: locale,
                    messages: intlLocaleData[locale],
                    textComponent: Fragment,
                };

                return (
                    <IntlProvider {...intlProviderProps}>
                        <LocaleProvider locale={antdLocaleData[locale]}>
                            <TranslatableComponent {...this.props} />
                        </LocaleProvider>
                    </IntlProvider>
                );
            }
        }

        const mapDispatchToProps = {
            createIntlProvider,
            destroyIntlProvider,
        };

        return connectWorker(BRIDGE_ID, mapDispatchToProps)(Translatable, Loader);
    };
};

export default translatableFactory;
