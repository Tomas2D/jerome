import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import getDisplayName from 'react-display-name';
import AntdLocaleProvider, { Locale as AntdLocaleData } from 'antd/es/locale-provider';

import { LocaleData, LocaleState, State } from '../types';

import { translateSelector } from '../services/selectors';
import { createIntlProvider, destroyIntlProvider } from '../services/actions';

interface WrappedProps extends LocaleState {
    [extraProps: string]: any;
}

const translatableFactory = (intlLocaleData: LocaleData, antdLocaleData?: LocaleData<AntdLocaleData>): any => {
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
                    messages: intlLocaleData[locale],
                };
                const LocaleProvider = antdLocaleData ? AntdLocaleProvider : React.Fragment;
                const localeProviderProps = antdLocaleData ? { locale: antdLocaleData[locale] } : {};

                return (
                    <IntlProvider {...intlProviderProps}>
                        <LocaleProvider {...localeProviderProps}>
                            <TranslatableComponent {...this.props} />
                        </LocaleProvider>
                    </IntlProvider>
                );
            }
        }

        const mapStateToProps = (state: State) => translateSelector(state);
        const mapDispatchToProps = {
            createIntlProvider,
            destroyIntlProvider,
        };

        return connect(
            mapStateToProps,
            mapDispatchToProps,
        )(Translatable);
    };
};

export default translatableFactory;
