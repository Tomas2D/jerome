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

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connectWorker } from '@ackee/redux-worker/main';
import { IntlProvider } from 'react-intl';
import getDisplayName from 'react-display-name';
import LocaleProvider from 'antd/lib/locale-provider';
import { createIntlProvider, destroyIntlProvider } from '../services/actions';
import { BRIDGE_ID } from '../constants';

function Loader() {
  return React.createElement("div", null, "Loading Translatable component...");
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
            textComponent: Fragment
          };
          return React.createElement(IntlProvider, intlProviderProps, React.createElement(LocaleProvider, {
            locale: antdLocaleData[locale]
          }, React.createElement(TranslatableComponent, this.props)));
        }
      }]);

      return Translatable;
    }(Component);

    _defineProperty(Translatable, "displayName", "Translatable(".concat(getDisplayName(TranslatableComponent), ")"));

    _defineProperty(Translatable, "propTypes", {
      locale: PropTypes.string.isRequired,
      createIntlProvider: PropTypes.func.isRequired,
      destroyIntlProvider: PropTypes.func.isRequired
    });

    var mapDispatchToProps = {
      createIntlProvider: createIntlProvider,
      destroyIntlProvider: destroyIntlProvider
    };
    return connectWorker(BRIDGE_ID, mapDispatchToProps)(Translatable, Loader);
  };
};

export default translatableFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvdHJhbnNsYXRhYmxlRmFjdG9yeS50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlByb3BUeXBlcyIsImNvbm5lY3RXb3JrZXIiLCJJbnRsUHJvdmlkZXIiLCJnZXREaXNwbGF5TmFtZSIsIkxvY2FsZVByb3ZpZGVyIiwiY3JlYXRlSW50bFByb3ZpZGVyIiwiZGVzdHJveUludGxQcm92aWRlciIsIkJSSURHRV9JRCIsIkxvYWRlciIsInRyYW5zbGF0YWJsZUZhY3RvcnkiLCJpbnRsTG9jYWxlRGF0YSIsImFudGRMb2NhbGVEYXRhIiwiVHJhbnNsYXRhYmxlQ29tcG9uZW50IiwiVHJhbnNsYXRhYmxlIiwicHJvcHMiLCJpbnRsRGF0YSIsImxvY2FsZSIsImludGxQcm92aWRlclByb3BzIiwia2V5IiwibWVzc2FnZXMiLCJ0ZXh0Q29tcG9uZW50Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsMEJBQTlCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixZQUE3QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsb0JBQTNCO0FBQ0EsT0FBT0MsY0FBUCxNQUF5RCwwQkFBekQ7QUFJQSxTQUFTQyxrQkFBVCxFQUE2QkMsbUJBQTdCLFFBQXdELHFCQUF4RDtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsY0FBMUI7O0FBTUEsU0FBU0MsTUFBVCxHQUFrQjtBQUNkLFNBQU8scUVBQVA7QUFDSDs7QUFFRCxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLGNBQUQsRUFBNkJDLGNBQTdCLEVBQWlGO0FBQ3pHLFNBQU8sVUFBQ0MscUJBQUQsRUFBOEQ7QUFBQSxRQUMzREMsWUFEMkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw0Q0FVekM7QUFDaEIsZUFBS0MsS0FBTCxDQUFXVCxrQkFBWCxDQUE4QjtBQUMxQlUsWUFBQUEsUUFBUSxFQUFFTDtBQURnQixXQUE5QjtBQUdIO0FBZDREO0FBQUE7QUFBQSwrQ0FnQnRDO0FBQ25CLGVBQUtJLEtBQUwsQ0FBV1IsbUJBQVg7QUFDSDtBQWxCNEQ7QUFBQTtBQUFBLGlDQW9CcEQ7QUFBQSxjQUNHVSxNQURILEdBQ2MsS0FBS0YsS0FEbkIsQ0FDR0UsTUFESDtBQUVMLGNBQU1DLGlCQUFpQixHQUFHO0FBQ3RCRCxZQUFBQSxNQUFNLEVBQU5BLE1BRHNCO0FBRXRCRSxZQUFBQSxHQUFHLEVBQUVGLE1BRmlCO0FBR3RCRyxZQUFBQSxRQUFRLEVBQUVULGNBQWMsQ0FBQ00sTUFBRCxDQUhGO0FBSXRCSSxZQUFBQSxhQUFhLEVBQUVyQjtBQUpPLFdBQTFCO0FBT0EsaUJBQ0ksb0JBQUMsWUFBRCxFQUFrQmtCLGlCQUFsQixFQUNJLG9CQUFDLGNBQUQ7QUFBZ0IsWUFBQSxNQUFNLEVBQUVOLGNBQWMsQ0FBQ0ssTUFBRDtBQUF0QyxhQUNJLG9CQUFDLHFCQUFELEVBQTJCLEtBQUtGLEtBQWhDLENBREosQ0FESixDQURKO0FBT0g7QUFwQzREOztBQUFBO0FBQUEsTUFDdENoQixTQURzQzs7QUFBQSxvQkFDM0RlLFlBRDJELHdDQUV4QlYsY0FBYyxDQUFDUyxxQkFBRCxDQUZVOztBQUFBLG9CQUMzREMsWUFEMkQsZUFJMUM7QUFDZkcsTUFBQUEsTUFBTSxFQUFFaEIsU0FBUyxDQUFDcUIsTUFBVixDQUFpQkMsVUFEVjtBQUVmakIsTUFBQUEsa0JBQWtCLEVBQUVMLFNBQVMsQ0FBQ3VCLElBQVYsQ0FBZUQsVUFGcEI7QUFHZmhCLE1BQUFBLG1CQUFtQixFQUFFTixTQUFTLENBQUN1QixJQUFWLENBQWVEO0FBSHJCLEtBSjBDOztBQXVDakUsUUFBTUUsa0JBQWtCLEdBQUc7QUFDdkJuQixNQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUR1QjtBQUV2QkMsTUFBQUEsbUJBQW1CLEVBQW5CQTtBQUZ1QixLQUEzQjtBQUtBLFdBQU9MLGFBQWEsQ0FBQ00sU0FBRCxFQUFZaUIsa0JBQVosQ0FBYixDQUE2Q1gsWUFBN0MsRUFBMkRMLE1BQTNELENBQVA7QUFDSCxHQTdDRDtBQThDSCxDQS9DRDs7QUFpREEsZUFBZUMsbUJBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0V29ya2VyIH0gZnJvbSAnQGFja2VlL3JlZHV4LXdvcmtlci9tYWluJztcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IGdldERpc3BsYXlOYW1lIGZyb20gJ3JlYWN0LWRpc3BsYXktbmFtZSc7XG5pbXBvcnQgTG9jYWxlUHJvdmlkZXIsIHsgTG9jYWxlIGFzIEFudGRMb2NhbGVEYXRhIH0gZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSwgTG9jYWxlU3RhdGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUludGxQcm92aWRlciwgZGVzdHJveUludGxQcm92aWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBCUklER0VfSUQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlZFByb3BzIGV4dGVuZHMgTG9jYWxlU3RhdGUge1xuICAgIFtleHRyYVByb3BzOiBzdHJpbmddOiBhbnk7XG59XG5cbmZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIFRyYW5zbGF0YWJsZSBjb21wb25lbnQuLi48L2Rpdj47XG59XG5cbmNvbnN0IHRyYW5zbGF0YWJsZUZhY3RvcnkgPSAoaW50bExvY2FsZURhdGE6IExvY2FsZURhdGEsIGFudGRMb2NhbGVEYXRhOiBMb2NhbGVEYXRhPEFudGRMb2NhbGVEYXRhPik6IGFueSA9PiB7XG4gICAgcmV0dXJuIChUcmFuc2xhdGFibGVDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8V3JhcHBlZFByb3BzPikgPT4ge1xuICAgICAgICBjbGFzcyBUcmFuc2xhdGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8V3JhcHBlZFByb3BzPiB7XG4gICAgICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgVHJhbnNsYXRhYmxlKCR7Z2V0RGlzcGxheU5hbWUoVHJhbnNsYXRhYmxlQ29tcG9uZW50KX0pYDtcblxuICAgICAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVJbnRsUHJvdmlkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgZGVzdHJveUludGxQcm92aWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlSW50bFByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgaW50bERhdGE6IGludGxMb2NhbGVEYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlc3Ryb3lJbnRsUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9jYWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGludGxQcm92aWRlclByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGtleTogbG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogaW50bExvY2FsZURhdGFbbG9jYWxlXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbXBvbmVudDogRnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbnRsUHJvdmlkZXIgey4uLmludGxQcm92aWRlclByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGVQcm92aWRlciBsb2NhbGU9e2FudGRMb2NhbGVEYXRhW2xvY2FsZV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGFibGVDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgICAgICAgICAgY3JlYXRlSW50bFByb3ZpZGVyLFxuICAgICAgICAgICAgZGVzdHJveUludGxQcm92aWRlcixcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gY29ubmVjdFdvcmtlcihCUklER0VfSUQsIG1hcERpc3BhdGNoVG9Qcm9wcykoVHJhbnNsYXRhYmxlLCBMb2FkZXIpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGFibGVGYWN0b3J5O1xuIl19