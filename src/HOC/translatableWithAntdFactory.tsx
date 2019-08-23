import React from 'react';
import PropTypes from 'prop-types';
import LocaleProvider, { Locale as AntdLocaleData } from 'antd/es/locale-provider';

import { LocaleData } from '../types';

import translatableFactory, { WrappedProps } from './translatableFactory';

const translatableWithAntdFactory = (intlLocaleData: LocaleData, antdLocaleData: LocaleData<AntdLocaleData>): any => {
    const translatable = translatableFactory(intlLocaleData);

    return (TranslatableComponent: React.ComponentType<WrappedProps>) => {
        const TranslatableWithAntd: React.StatelessComponent<WrappedProps> = props => (
            <LocaleProvider locale={antdLocaleData[props.locale]}>
                <TranslatableComponent {...props} />
            </LocaleProvider>
        );

        TranslatableWithAntd.propTypes = {
            locale: PropTypes.string.isRequired,
        };

        return translatable(TranslatableWithAntd);
    };
};

export default translatableWithAntdFactory;
