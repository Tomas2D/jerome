"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _main = require("@ackee/redux-worker/main");

var _reactIntl = require("react-intl");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

var _localeProvider = _interopRequireDefault(require("antd/lib/locale-provider"));

var _actions = require("../services/actions");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Loader() {
  return _react.default.createElement("div", null, "Loading Translatable component...");
}

var translatableFactory = function translatableFactory(intlLocaleData, antdLocaleData) {
  return function (TranslatableComponent) {
    var Translatable =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Translatable, _Component);

      function Translatable() {
        _classCallCheck(this, Translatable);

        return _possibleConstructorReturn(this, _getPrototypeOf(Translatable).apply(this, arguments));
      }

      _createClass(Translatable, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.createIntlProvider({
            intlData: intlLocaleData
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.props.destroyIntlProvider();
        }
      }, {
        key: "render",
        value: function render() {
          var locale = this.props.locale;
          var intlProviderProps = {
            locale: locale,
            key: locale,
            messages: intlLocaleData[locale],
            textComponent: _react.Fragment
          };
          return _react.default.createElement(_reactIntl.IntlProvider, intlProviderProps, _react.default.createElement(_localeProvider.default, {
            locale: antdLocaleData[locale]
          }, _react.default.createElement(TranslatableComponent, this.props)));
        }
      }]);

      return Translatable;
    }(_react.Component);

    _defineProperty(Translatable, "displayName", "Translatable(".concat((0, _reactDisplayName.default)(TranslatableComponent), ")"));

    _defineProperty(Translatable, "propTypes", {
      locale: _propTypes.default.string.isRequired,
      createIntlProvider: _propTypes.default.func.isRequired,
      destroyIntlProvider: _propTypes.default.func.isRequired
    });

    var mapDispatchToProps = {
      createIntlProvider: _actions.createIntlProvider,
      destroyIntlProvider: _actions.destroyIntlProvider
    };
    return (0, _main.connectWorker)(_constants.BRIDGE_ID, mapDispatchToProps)(Translatable, Loader);
  };
};

var _default = translatableFactory;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvdHJhbnNsYXRhYmxlRmFjdG9yeS50c3giXSwibmFtZXMiOlsiTG9hZGVyIiwidHJhbnNsYXRhYmxlRmFjdG9yeSIsImludGxMb2NhbGVEYXRhIiwiYW50ZExvY2FsZURhdGEiLCJUcmFuc2xhdGFibGVDb21wb25lbnQiLCJUcmFuc2xhdGFibGUiLCJwcm9wcyIsImNyZWF0ZUludGxQcm92aWRlciIsImludGxEYXRhIiwiZGVzdHJveUludGxQcm92aWRlciIsImxvY2FsZSIsImludGxQcm92aWRlclByb3BzIiwia2V5IiwibWVzc2FnZXMiLCJ0ZXh0Q29tcG9uZW50IiwiRnJhZ21lbnQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkJSSURHRV9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFNBQVNBLE1BQVQsR0FBa0I7QUFDZCxTQUFPLDhFQUFQO0FBQ0g7O0FBRUQsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxjQUFELEVBQTZCQyxjQUE3QixFQUFpRjtBQUN6RyxTQUFPLFVBQUNDLHFCQUFELEVBQThEO0FBQUEsUUFDM0RDLFlBRDJEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNENBVXpDO0FBQ2hCLGVBQUtDLEtBQUwsQ0FBV0Msa0JBQVgsQ0FBOEI7QUFDMUJDLFlBQUFBLFFBQVEsRUFBRU47QUFEZ0IsV0FBOUI7QUFHSDtBQWQ0RDtBQUFBO0FBQUEsK0NBZ0J0QztBQUNuQixlQUFLSSxLQUFMLENBQVdHLG1CQUFYO0FBQ0g7QUFsQjREO0FBQUE7QUFBQSxpQ0FvQnBEO0FBQUEsY0FDR0MsTUFESCxHQUNjLEtBQUtKLEtBRG5CLENBQ0dJLE1BREg7QUFFTCxjQUFNQyxpQkFBaUIsR0FBRztBQUN0QkQsWUFBQUEsTUFBTSxFQUFOQSxNQURzQjtBQUV0QkUsWUFBQUEsR0FBRyxFQUFFRixNQUZpQjtBQUd0QkcsWUFBQUEsUUFBUSxFQUFFWCxjQUFjLENBQUNRLE1BQUQsQ0FIRjtBQUl0QkksWUFBQUEsYUFBYSxFQUFFQztBQUpPLFdBQTFCO0FBT0EsaUJBQ0ksNkJBQUMsdUJBQUQsRUFBa0JKLGlCQUFsQixFQUNJLDZCQUFDLHVCQUFEO0FBQWdCLFlBQUEsTUFBTSxFQUFFUixjQUFjLENBQUNPLE1BQUQ7QUFBdEMsYUFDSSw2QkFBQyxxQkFBRCxFQUEyQixLQUFLSixLQUFoQyxDQURKLENBREosQ0FESjtBQU9IO0FBcEM0RDs7QUFBQTtBQUFBLE1BQ3RDVSxnQkFEc0M7O0FBQUEsb0JBQzNEWCxZQUQyRCx3Q0FFeEIsK0JBQWVELHFCQUFmLENBRndCOztBQUFBLG9CQUMzREMsWUFEMkQsZUFJMUM7QUFDZkssTUFBQUEsTUFBTSxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVmWixNQUFBQSxrQkFBa0IsRUFBRVUsbUJBQVVHLElBQVYsQ0FBZUQsVUFGcEI7QUFHZlYsTUFBQUEsbUJBQW1CLEVBQUVRLG1CQUFVRyxJQUFWLENBQWVEO0FBSHJCLEtBSjBDOztBQXVDakUsUUFBTUUsa0JBQWtCLEdBQUc7QUFDdkJkLE1BQUFBLGtCQUFrQixFQUFsQkEsMkJBRHVCO0FBRXZCRSxNQUFBQSxtQkFBbUIsRUFBbkJBO0FBRnVCLEtBQTNCO0FBS0EsV0FBTyx5QkFBY2Esb0JBQWQsRUFBeUJELGtCQUF6QixFQUE2Q2hCLFlBQTdDLEVBQTJETCxNQUEzRCxDQUFQO0FBQ0gsR0E3Q0Q7QUE4Q0gsQ0EvQ0Q7O2VBaURlQyxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3RXb3JrZXIgfSBmcm9tICdAYWNrZWUvcmVkdXgtd29ya2VyL21haW4nO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgZ2V0RGlzcGxheU5hbWUgZnJvbSAncmVhY3QtZGlzcGxheS1uYW1lJztcbmltcG9ydCBMb2NhbGVQcm92aWRlciwgeyBMb2NhbGUgYXMgQW50ZExvY2FsZURhdGEgfSBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXInO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhLCBMb2NhbGVTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgY3JlYXRlSW50bFByb3ZpZGVyLCBkZXN0cm95SW50bFByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9ucyc7XG5cbmltcG9ydCB7IEJSSURHRV9JRCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBXcmFwcGVkUHJvcHMgZXh0ZW5kcyBMb2NhbGVTdGF0ZSB7XG4gICAgW2V4dHJhUHJvcHM6IHN0cmluZ106IGFueTtcbn1cblxuZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgVHJhbnNsYXRhYmxlIGNvbXBvbmVudC4uLjwvZGl2Pjtcbn1cblxuY29uc3QgdHJhbnNsYXRhYmxlRmFjdG9yeSA9IChpbnRsTG9jYWxlRGF0YTogTG9jYWxlRGF0YSwgYW50ZExvY2FsZURhdGE6IExvY2FsZURhdGE8QW50ZExvY2FsZURhdGE+KTogYW55ID0+IHtcbiAgICByZXR1cm4gKFRyYW5zbGF0YWJsZUNvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxXcmFwcGVkUHJvcHM+KSA9PiB7XG4gICAgICAgIGNsYXNzIFRyYW5zbGF0YWJsZSBleHRlbmRzIENvbXBvbmVudDxXcmFwcGVkUHJvcHM+IHtcbiAgICAgICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBUcmFuc2xhdGFibGUoJHtnZXREaXNwbGF5TmFtZShUcmFuc2xhdGFibGVDb21wb25lbnQpfSlgO1xuXG4gICAgICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUludGxQcm92aWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBkZXN0cm95SW50bFByb3ZpZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVJbnRsUHJvdmlkZXIoe1xuICAgICAgICAgICAgICAgICAgICBpbnRsRGF0YTogaW50bExvY2FsZURhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVzdHJveUludGxQcm92aWRlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsb2NhbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50bFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBsb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBpbnRsTG9jYWxlRGF0YVtsb2NhbGVdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29tcG9uZW50OiBGcmFnbWVudCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEludGxQcm92aWRlciB7Li4uaW50bFByb3ZpZGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsZVByb3ZpZGVyIGxvY2FsZT17YW50ZExvY2FsZURhdGFbbG9jYWxlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0YWJsZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvSW50bFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgICAgICAgICBjcmVhdGVJbnRsUHJvdmlkZXIsXG4gICAgICAgICAgICBkZXN0cm95SW50bFByb3ZpZGVyLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBjb25uZWN0V29ya2VyKEJSSURHRV9JRCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShUcmFuc2xhdGFibGUsIExvYWRlcik7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0YWJsZUZhY3Rvcnk7XG4iXX0=