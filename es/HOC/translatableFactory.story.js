function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FormattedMessage, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';
import cs_CZ from 'antd/lib/locale-provider/cs_CZ';
import en_US from 'antd/lib/locale-provider/en_US';
import { Pagination } from 'antd';
import { storiesOf } from '@storybook/react';
import 'antd/es/pagination/style/index.less';
import translatable from './translatableFactory';
addLocaleData(_toConsumableArray(cs));
var messages = {
  cs: {
    foo: 'Ano, ja jsem foo',
    'bar.baz': 'Ne, ja jsem bar baz',
    text: 'Čus, já jsem volitelný text'
  },
  en: {
    foo: 'Yeah, I am foo',
    'bar.baz': 'No, I am bar baz',
    text: 'Hello, I am custom text'
  }
};
var antdLocales = {
  cs: cs_CZ,
  en: en_US
};
var initialState = {
  translate: {
    locale: 'cs'
  }
};
var store = createStore(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'CHANGE_LOCALE') {
    return {
      translate: {
        locale: action.locale
      }
    };
  }

  return state;
});

var localeChangeHandler = function localeChangeHandler(e) {
  return store.dispatch({
    type: 'CHANGE_LOCALE',
    locale: e.currentTarget.value
  });
};

var ContentComponent = function ContentComponent(_ref) {
  var locale = _ref.locale,
      text = _ref.text;
  return React.createElement("div", null, ['cs', 'en'].map(function (lang) {
    return React.createElement("div", {
      key: lang
    }, lang, ' ', React.createElement("input", {
      type: "radio",
      name: "locale",
      value: lang,
      checked: lang === locale,
      onChange: localeChangeHandler
    }));
  }), React.createElement(Pagination, {
    defaultCurrent: 1,
    total: 50,
    showSizeChanger: true
  }), React.createElement("h1", null, React.createElement(FormattedMessage, {
    id: "foo"
  })), React.createElement("h2", null, React.createElement(FormattedMessage, {
    id: "bar.baz"
  })), React.createElement("p", null, text));
};

ContentComponent.propTypes = {
  locale: PropTypes.string.isRequired,
  text: PropTypes.node
};
ContentComponent.defaultProps = {
  text: null
};
storiesOf('HOC|translatable', module).add('simple', function () {
  var TranslatableComponent = translatable(messages, antdLocales)(ContentComponent);
  return React.createElement(Provider, {
    store: store
  }, React.createElement(TranslatableComponent, {
    text: React.createElement(FormattedMessage, {
      id: "text"
    })
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvdHJhbnNsYXRhYmxlRmFjdG9yeS5zdG9yeS50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJjcmVhdGVTdG9yZSIsIlByb3ZpZGVyIiwiRm9ybWF0dGVkTWVzc2FnZSIsImFkZExvY2FsZURhdGEiLCJjcyIsImNzX0NaIiwiZW5fVVMiLCJQYWdpbmF0aW9uIiwic3Rvcmllc09mIiwidHJhbnNsYXRhYmxlIiwibWVzc2FnZXMiLCJmb28iLCJ0ZXh0IiwiZW4iLCJhbnRkTG9jYWxlcyIsImluaXRpYWxTdGF0ZSIsInRyYW5zbGF0ZSIsImxvY2FsZSIsInN0b3JlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9jYWxlQ2hhbmdlSGFuZGxlciIsImUiLCJkaXNwYXRjaCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIkNvbnRlbnRDb21wb25lbnQiLCJtYXAiLCJsYW5nIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJtb2R1bGUiLCJhZGQiLCJUcmFuc2xhdGFibGVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxnQkFBUDtBQUNBLE9BQU9BLEtBQVAsTUFBc0MsT0FBdEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixPQUE1QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxnQkFBVCxFQUEyQkMsYUFBM0IsUUFBZ0QsWUFBaEQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsMkJBQWY7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLGdDQUFsQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsZ0NBQWxCO0FBRUEsU0FBU0MsVUFBVCxRQUEyQixNQUEzQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBR0EsT0FBTyxxQ0FBUDtBQUVBLE9BQU9DLFlBQVAsTUFBeUIsdUJBQXpCO0FB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QixHQUFHNUIsWUFBWSxDQUFDQyxRQUFELEVBQVdJLFdBQVgsQ0FBWixDQUFvQ2EsZ0JBQXBDLENBQTlCO0FBQ0EsU0FDSSxvQkFBQyxRQUFEO0FBQVUsSUFBQSxLQUFLLEVBQUVUO0FBQWpCLEtBQ0ksb0JBQUMscUJBQUQ7QUFBdUIsSUFBQSxJQUFJLEVBQUUsb0JBQUMsZ0JBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUM7QUFBckI7QUFBN0IsSUFESixDQURKO0FBS0gsQ0FQRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBhZGRMb2NhbGVEYXRhIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgY3MgZnJvbSAncmVhY3QtaW50bC9sb2NhbGUtZGF0YS9jcyc7XG5pbXBvcnQgY3NfQ1ogZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NzX0NaJztcbmltcG9ydCBlbl9VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJ2FudGQvZXMvcGFnaW5hdGlvbi9zdHlsZS9pbmRleC5sZXNzJztcblxuaW1wb3J0IHRyYW5zbGF0YWJsZSBmcm9tICcuL3RyYW5zbGF0YWJsZUZhY3RvcnknO1xuXG5hZGRMb2NhbGVEYXRhKFsuLi5jc10pO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgICBjczoge1xuICAgICAgICBmb286ICdBbm8sIGphIGpzZW0gZm9vJyxcbiAgICAgICAgJ2Jhci5iYXonOiAnTmUsIGphIGpzZW0gYmFyIGJheicsXG4gICAgICAgIHRleHQ6ICfEjHVzLCBqw6EganNlbSB2b2xpdGVsbsO9IHRleHQnLFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgICAgZm9vOiAnWWVhaCwgSSBhbSBmb28nLFxuICAgICAgICAnYmFyLmJheic6ICdObywgSSBhbSBiYXIgYmF6JyxcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBJIGFtIGN1c3RvbSB0ZXh0JyxcbiAgICB9LFxufTtcblxuY29uc3QgYW50ZExvY2FsZXMgPSB7XG4gICAgY3M6IGNzX0NaLFxuICAgIGVuOiBlbl9VUyxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0cmFuc2xhdGU6IHsgbG9jYWxlOiAnY3MnIH0sXG59O1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEFOR0VfTE9DQUxFJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IGxvY2FsZTogYWN0aW9uLmxvY2FsZSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59KTtcblxuY29uc3QgbG9jYWxlQ2hhbmdlSGFuZGxlciA9IChlOiBTeW50aGV0aWNFdmVudDx7IHZhbHVlOiBzdHJpbmcgfT4pID0+XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX0xPQ0FMRScsXG4gICAgICAgIGxvY2FsZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxvY2FsZTogTG9jYWxlO1xuICAgIHRleHQ/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IENvbnRlbnRDb21wb25lbnQ6IFJlYWN0LlNGQzxQcm9wcz4gPSAoeyBsb2NhbGUsIHRleHQgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIHtbJ2NzJywgJ2VuJ10ubWFwKGxhbmcgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2xhbmd9PlxuICAgICAgICAgICAgICAgIHtsYW5nfXsnICd9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGFuZyA9PT0gbG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG9jYWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8UGFnaW5hdGlvbiBkZWZhdWx0Q3VycmVudD17MX0gdG90YWw9ezUwfSBzaG93U2l6ZUNoYW5nZXIgLz5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJmb29cIiAvPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImJhci5iYXpcIiAvPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5Db250ZW50Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkNvbnRlbnRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6IG51bGwsXG59O1xuXG5zdG9yaWVzT2YoJ0hPQ3x0cmFuc2xhdGFibGUnLCBtb2R1bGUpLmFkZCgnc2ltcGxlJywgKCkgPT4ge1xuICAgIGNvbnN0IFRyYW5zbGF0YWJsZUNvbXBvbmVudCA9IHRyYW5zbGF0YWJsZShtZXNzYWdlcywgYW50ZExvY2FsZXMpKENvbnRlbnRDb21wb25lbnQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFRyYW5zbGF0YWJsZUNvbXBvbmVudCB0ZXh0PXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInRleHRcIiAvPn0gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xufSk7XG4iXX0=