import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { IntlProvider} from 'react-intl';
import getDisplayName from 'react-display-name';
import { Subtract } from 'utility-types';
import LocaleProvider, { Locale as AntdLocaleData } from 'antd/lib/locale-provider';

import { LocaleData, LocaleState, State } from '../types';

import { translateSelector } from '../services/selectors';

interface WrappedProps extends LocaleState {
    [extraProps: string]: any;
}

const translatableFactory = (
    intlLocaleData: LocaleData,
    antdLocaleData: LocaleData<AntdLocaleData>,
) => {
    return (TranslatableComponent: React.SFC<WrappedProps>) => {
        const Component: React.SFC<WrappedProps> = (props) => (
            <IntlProvider
                locale={props.locale}
                key={props.locale}
                messages={intlLocaleData[props.locale]}
            >
                <LocaleProvider locale={antdLocaleData[props.locale]}>
                    <TranslatableComponent {...props} />
                </LocaleProvider>
            </IntlProvider>
        );

        Component.displayName = `Translatable(${getDisplayName(
            TranslatableComponent,
        )})`;
        Component.propTypes = {
            locale: PropTypes.string.isRequired,
        };

        return connect((state: State) => translateSelector(state))(Component);
    };
};

export default translatableFactory;
