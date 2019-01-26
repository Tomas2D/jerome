"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _cs = _interopRequireDefault(require("react-intl/locale-data/cs"));

var _cs_CZ = _interopRequireDefault(require("antd/lib/locale-provider/cs_CZ"));

var _en_US = _interopRequireDefault(require("antd/lib/locale-provider/en_US"));

var _antd = require("antd");

var _react2 = require("@storybook/react");

require("antd/es/pagination/style/index.less");

var _translatableFactory = _interopRequireDefault(require("./translatableFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(0, _reactIntl.addLocaleData)(_toConsumableArray(_cs.default));
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
  cs: _cs_CZ.default,
  en: _en_US.default
};
var initialState = {
  translate: {
    locale: 'cs'
  }
};
var store = (0, _redux.createStore)(function () {
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
  return _react.default.createElement("div", null, ['cs', 'en'].map(function (lang) {
    return _react.default.createElement("div", {
      key: lang
    }, lang, ' ', _react.default.createElement("input", {
      type: "radio",
      name: "locale",
      value: lang,
      checked: lang === locale,
      onChange: localeChangeHandler
    }));
  }), _react.default.createElement(_antd.Pagination, {
    defaultCurrent: 1,
    total: 50,
    showSizeChanger: true
  }), _react.default.createElement("h1", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "foo"
  })), _react.default.createElement("h2", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "bar.baz"
  })), _react.default.createElement("p", null, text));
};

ContentComponent.propTypes = {
  locale: _propTypes.default.string.isRequired,
  text: _propTypes.default.node
};
ContentComponent.defaultProps = {
  text: null
};
(0, _react2.storiesOf)('HOC|translatable', module).add('simple', function () {
  var TranslatableComponent = (0, _translatableFactory.default)(messages, antdLocales)(ContentComponent);
  return _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(TranslatableComponent, {
    text: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "text"
    })
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvdHJhbnNsYXRhYmxlRmFjdG9yeS5zdG9yeS50c3giXSwibmFtZXMiOlsiY3MiLCJtZXNzYWdlcyIsImZvbyIsInRleHQiLCJlbiIsImFudGRMb2NhbGVzIiwiY3NfQ1oiLCJlbl9VUyIsImluaXRpYWxTdGF0ZSIsInRyYW5zbGF0ZSIsImxvY2FsZSIsInN0b3JlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9jYWxlQ2hhbmdlSGFuZGxlciIsImUiLCJkaXNwYXRjaCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIkNvbnRlbnRDb21wb25lbnQiLCJtYXAiLCJsYW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJtb2R1bGUiLCJhZGQiLCJUcmFuc2xhdGFibGVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLGlEQUFrQkEsV0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDYkQsRUFBQUEsRUFBRSxFQUFFO0FBQ0FFLElBQUFBLEdBQUcsRUFBRSxrQkFETDtBQUVBLGVBQVcscUJBRlg7QUFHQUMsSUFBQUEsSUFBSSxFQUFFO0FBSE4sR0FEUztBQU1iQyxFQUFBQSxFQUFFLEVBQUU7QUFDQUYsSUFBQUEsR0FBRyxFQUFFLGdCQURMO0FBRUEsZUFBVyxrQkFGWDtBQUdBQyxJQUFBQSxJQUFJLEVBQUU7QUFITjtBQU5TLENBQWpCO0FBYUEsSUFBTUUsV0FBVyxHQUFHO0FBQ2hCTCxFQUFBQSxFQUFFLEVBQUVNLGNBRFk7QUFFaEJGLEVBQUFBLEVBQUUsRUFBRUc7QUFGWSxDQUFwQjtBQUtBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsU0FBUyxFQUFFO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWO0FBRE0sQ0FBckI7QUFJQSxJQUFNQyxLQUFLLEdBQUcsd0JBQVksWUFBdUM7QUFBQSxNQUF0Q0MsS0FBc0MsdUVBQTlCSixZQUE4QjtBQUFBLE1BQWhCSyxNQUFnQjs7QUFDN0QsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGVBQXBCLEVBQXFDO0FBQ2pDLFdBQU87QUFDSEwsTUFBQUEsU0FBUyxFQUFFO0FBQUVDLFFBQUFBLE1BQU0sRUFBRUcsTUFBTSxDQUFDSDtBQUFqQjtBQURSLEtBQVA7QUFHSDs7QUFDRCxTQUFPRSxLQUFQO0FBQ0gsQ0FQYSxDQUFkOztBQVNBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3hCTCxLQUFLLENBQUNNLFFBQU4sQ0FBZTtBQUNYSCxJQUFBQSxJQUFJLEVBQUUsZUFESztBQUVYSixJQUFBQSxNQUFNLEVBQUVNLENBQUMsQ0FBQ0UsYUFBRixDQUFnQkM7QUFGYixHQUFmLENBRHdCO0FBQUEsQ0FBNUI7O0FBV0EsSUFBTUMsZ0JBQWtDLEdBQUcsU0FBckNBLGdCQUFxQztBQUFBLE1BQUdWLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdQLElBQVgsUUFBV0EsSUFBWDtBQUFBLFNBQ3ZDLDBDQUNLLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtCLEdBQWIsQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLFdBQ2xCO0FBQUssTUFBQSxHQUFHLEVBQUVBO0FBQVYsT0FDS0EsSUFETCxFQUNXLEdBRFgsRUFFSTtBQUNJLE1BQUEsSUFBSSxFQUFDLE9BRFQ7QUFFSSxNQUFBLElBQUksRUFBQyxRQUZUO0FBR0ksTUFBQSxLQUFLLEVBQUVBLElBSFg7QUFJSSxNQUFBLE9BQU8sRUFBRUEsSUFBSSxLQUFLWixNQUp0QjtBQUtJLE1BQUEsUUFBUSxFQUFFSztBQUxkLE1BRkosQ0FEa0I7QUFBQSxHQUFyQixDQURMLEVBYUksNkJBQUMsZ0JBQUQ7QUFBWSxJQUFBLGNBQWMsRUFBRSxDQUE1QjtBQUErQixJQUFBLEtBQUssRUFBRSxFQUF0QztBQUEwQyxJQUFBLGVBQWU7QUFBekQsSUFiSixFQWNJLHlDQUNJLDZCQUFDLDJCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFDO0FBQXJCLElBREosQ0FkSixFQWlCSSx5Q0FDSSw2QkFBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBQztBQUFyQixJQURKLENBakJKLEVBb0JJLHdDQUFJWixJQUFKLENBcEJKLENBRHVDO0FBQUEsQ0FBM0M7O0FBeUJBaUIsZ0JBQWdCLENBQUNHLFNBQWpCLEdBQTZCO0FBQ3pCYixFQUFBQSxNQUFNLEVBQUVjLG1CQUFVQyxNQUFWLENBQWlCQyxVQURBO0FBRXpCdkIsRUFBQUEsSUFBSSxFQUFFcUIsbUJBQVVHO0FBRlMsQ0FBN0I7QUFLQVAsZ0JBQWdCLENBQUNRLFlBQWpCLEdBQWdDO0FBQzVCekIsRUFBQUEsSUFBSSxFQUFFO0FBRHNCLENBQWhDO0FBSUEsdUJBQVUsa0JBQVYsRUFBOEIwQixNQUE5QixFQUFzQ0MsR0FBdEMsQ0FBMEMsUUFBMUMsRUFBb0QsWUFBTTtBQUN0RCxNQUFNQyxxQkFBcUIsR0FBRyxrQ0FBYTlCLFFBQWIsRUFBdUJJLFdBQXZCLEVBQW9DZSxnQkFBcEMsQ0FBOUI7QUFDQSxTQUNJLDZCQUFDLG9CQUFEO0FBQVUsSUFBQSxLQUFLLEVBQUVUO0FBQWpCLEtBQ0ksNkJBQUMscUJBQUQ7QUFBdUIsSUFBQSxJQUFJLEVBQUUsNkJBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUM7QUFBckI7QUFBN0IsSUFESixDQURKO0FBS0gsQ0FQRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBhZGRMb2NhbGVEYXRhIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgY3MgZnJvbSAncmVhY3QtaW50bC9sb2NhbGUtZGF0YS9jcyc7XG5pbXBvcnQgY3NfQ1ogZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NzX0NaJztcbmltcG9ydCBlbl9VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJ2FudGQvZXMvcGFnaW5hdGlvbi9zdHlsZS9pbmRleC5sZXNzJztcblxuaW1wb3J0IHRyYW5zbGF0YWJsZSBmcm9tICcuL3RyYW5zbGF0YWJsZUZhY3RvcnknO1xuXG5hZGRMb2NhbGVEYXRhKFsuLi5jc10pO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgICBjczoge1xuICAgICAgICBmb286ICdBbm8sIGphIGpzZW0gZm9vJyxcbiAgICAgICAgJ2Jhci5iYXonOiAnTmUsIGphIGpzZW0gYmFyIGJheicsXG4gICAgICAgIHRleHQ6ICfEjHVzLCBqw6EganNlbSB2b2xpdGVsbsO9IHRleHQnLFxuICAgIH0sXG4gICAgZW46IHtcbiAgICAgICAgZm9vOiAnWWVhaCwgSSBhbSBmb28nLFxuICAgICAgICAnYmFyLmJheic6ICdObywgSSBhbSBiYXIgYmF6JyxcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBJIGFtIGN1c3RvbSB0ZXh0JyxcbiAgICB9LFxufTtcblxuY29uc3QgYW50ZExvY2FsZXMgPSB7XG4gICAgY3M6IGNzX0NaLFxuICAgIGVuOiBlbl9VUyxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0cmFuc2xhdGU6IHsgbG9jYWxlOiAnY3MnIH0sXG59O1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEFOR0VfTE9DQUxFJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IGxvY2FsZTogYWN0aW9uLmxvY2FsZSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59KTtcblxuY29uc3QgbG9jYWxlQ2hhbmdlSGFuZGxlciA9IChlOiBTeW50aGV0aWNFdmVudDx7IHZhbHVlOiBzdHJpbmcgfT4pID0+XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX0xPQ0FMRScsXG4gICAgICAgIGxvY2FsZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxvY2FsZTogTG9jYWxlO1xuICAgIHRleHQ/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IENvbnRlbnRDb21wb25lbnQ6IFJlYWN0LlNGQzxQcm9wcz4gPSAoeyBsb2NhbGUsIHRleHQgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIHtbJ2NzJywgJ2VuJ10ubWFwKGxhbmcgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2xhbmd9PlxuICAgICAgICAgICAgICAgIHtsYW5nfXsnICd9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGFuZyA9PT0gbG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bG9jYWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8UGFnaW5hdGlvbiBkZWZhdWx0Q3VycmVudD17MX0gdG90YWw9ezUwfSBzaG93U2l6ZUNoYW5nZXIgLz5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJmb29cIiAvPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImJhci5iYXpcIiAvPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5Db250ZW50Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkNvbnRlbnRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6IG51bGwsXG59O1xuXG5zdG9yaWVzT2YoJ0hPQ3x0cmFuc2xhdGFibGUnLCBtb2R1bGUpLmFkZCgnc2ltcGxlJywgKCkgPT4ge1xuICAgIGNvbnN0IFRyYW5zbGF0YWJsZUNvbXBvbmVudCA9IHRyYW5zbGF0YWJsZShtZXNzYWdlcywgYW50ZExvY2FsZXMpKENvbnRlbnRDb21wb25lbnQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFRyYW5zbGF0YWJsZUNvbXBvbmVudCB0ZXh0PXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInRleHRcIiAvPn0gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xufSk7XG4iXX0=