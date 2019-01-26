"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntl = getIntl;
exports.default = intlProviderFlow;

var _effects = require("redux-saga/effects");

var _reactIntl = require("react-intl");

var _actionTypes = _interopRequireDefault(require("../actionTypes"));

var _selectors = require("../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createIntlProvider),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(getIntl),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(initializedIntlProvider),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(intlProviderFlow);

var store = {
  locale: null,
  intl: null,
  intlData: {}
};

function createIntlProvider() {
  var _ref, locale, intlConfig, _getChildContext, intl;

  return regeneratorRuntime.wrap(function createIntlProvider$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (store.intlData) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return (0, _effects.take)(_actionTypes.default.CREATE_INTL_PROVIDER);

        case 3:
          _context.next = 5;
          return (0, _effects.select)(_selectors.translateSelector);

        case 5:
          _ref = _context.sent;
          locale = _ref.locale;

          if (!(store.locale === locale && store.intl)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return");

        case 9:
          store.locale = locale;
          intlConfig = {
            locale: locale,
            key: locale,
            messages: store.intlData[locale]
          };
          _getChildContext = new _reactIntl.IntlProvider(intlConfig).getChildContext(), intl = _getChildContext.intl;
          store.intl = intl;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getIntl() {
  return regeneratorRuntime.wrap(function getIntl$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (store.intl) {
            _context2.next = 3;
            break;
          }

          _context2.next = 3;
          return createIntlProvider();

        case 3:
          return _context2.abrupt("return", store.intl);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function initializedIntlProvider(action) {
  return regeneratorRuntime.wrap(function initializedIntlProvider$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          store.intlData = action.payload.intlData;
          _context3.next = 3;
          return (0, _effects.call)(createIntlProvider);

        case 3:
          _context3.next = 5;
          return (0, _effects.takeEvery)(_actionTypes.default.SET_LOCALE, createIntlProvider);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function cleanUp() {
  store.intl = null;
  store.intlData = {};
  store.locale = null;
}

function intlProviderFlow() {
  var action, result;
  return regeneratorRuntime.wrap(function intlProviderFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!true) {
            _context4.next = 13;
            break;
          }

          _context4.next = 3;
          return (0, _effects.take)(_actionTypes.default.CREATE_INTL_PROVIDER);

        case 3:
          action = _context4.sent;
          _context4.next = 6;
          return (0, _effects.race)({
            task: (0, _effects.call)(initializedIntlProvider, action),
            cancel: (0, _effects.take)(_actionTypes.default.DESTROY_INTL_PROVIDER)
          });

        case 6:
          result = _context4.sent;

          if (result.cancel) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return (0, _effects.take)(_actionTypes.default.DESTROY_INTL_PROVIDER);

        case 10:
          cleanUp();
          _context4.next = 0;
          break;

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9pbnRsUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiY3JlYXRlSW50bFByb3ZpZGVyIiwiZ2V0SW50bCIsImluaXRpYWxpemVkSW50bFByb3ZpZGVyIiwiaW50bFByb3ZpZGVyRmxvdyIsInN0b3JlIiwibG9jYWxlIiwiaW50bCIsImludGxEYXRhIiwidHlwZXMiLCJDUkVBVEVfSU5UTF9QUk9WSURFUiIsInRyYW5zbGF0ZVNlbGVjdG9yIiwiaW50bENvbmZpZyIsImtleSIsIm1lc3NhZ2VzIiwiSW50bFByb3ZpZGVyIiwiZ2V0Q2hpbGRDb250ZXh0IiwiYWN0aW9uIiwicGF5bG9hZCIsIlNFVF9MT0NBTEUiLCJjbGVhblVwIiwidGFzayIsImNhbmNlbCIsIkRFU1RST1lfSU5UTF9QUk9WSURFUiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O3dCQVFVQSxrQjs7O3dCQXdCT0MsTzs7O3dCQVFQQyx1Qjs7O3dCQWNlQyxnQjs7QUFwRHpCLElBQU1DLEtBQVksR0FBRztBQUNqQkMsRUFBQUEsTUFBTSxFQUFFLElBRFM7QUFFakJDLEVBQUFBLElBQUksRUFBRSxJQUZXO0FBR2pCQyxFQUFBQSxRQUFRLEVBQUU7QUFITyxDQUFyQjs7QUFNQSxTQUFVUCxrQkFBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDU0ksS0FBSyxDQUFDRyxRQURmO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRVEsaUJBQU0sbUJBQUtDLHFCQUFNQyxvQkFBWCxDQUFOOztBQUZSO0FBQUE7QUFLdUIsaUJBQU0scUJBQU9DLDRCQUFQLENBQU47O0FBTHZCO0FBQUE7QUFLWUwsVUFBQUEsTUFMWixRQUtZQSxNQUxaOztBQUFBLGdCQU9RRCxLQUFLLENBQUNDLE1BQU4sS0FBaUJBLE1BQWpCLElBQTJCRCxLQUFLLENBQUNFLElBUHpDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBV0lGLFVBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmO0FBRU1NLFVBQUFBLFVBYlYsR0FhdUI7QUFDZk4sWUFBQUEsTUFBTSxFQUFOQSxNQURlO0FBRWZPLFlBQUFBLEdBQUcsRUFBRVAsTUFGVTtBQUdmUSxZQUFBQSxRQUFRLEVBQUVULEtBQUssQ0FBQ0csUUFBTixDQUFlRixNQUFmO0FBSEssV0FidkI7QUFBQSw2QkFtQnFCLElBQUlTLHVCQUFKLENBQWlCSCxVQUFqQixFQUE2QkksZUFBN0IsRUFuQnJCLEVBbUJZVCxJQW5CWixvQkFtQllBLElBbkJaO0FBcUJJRixVQUFBQSxLQUFLLENBQUNFLElBQU4sR0FBYUEsSUFBYjs7QUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JPLFNBQVVMLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0VHLEtBQUssQ0FBQ0UsSUFEUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVDLGlCQUFNTixrQkFBa0IsRUFBeEI7O0FBRkQ7QUFBQSw0Q0FLSUksS0FBSyxDQUFDRSxJQUxWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFQLFNBQVVKLHVCQUFWLENBQWtDYyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0laLFVBQUFBLEtBQUssQ0FBQ0csUUFBTixHQUFpQlMsTUFBTSxDQUFDQyxPQUFQLENBQWVWLFFBQWhDO0FBREo7QUFHSSxpQkFBTSxtQkFBS1Asa0JBQUwsQ0FBTjs7QUFISjtBQUFBO0FBS0ksaUJBQU0sd0JBQVVRLHFCQUFNVSxVQUFoQixFQUE0QmxCLGtCQUE1QixDQUFOOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVNtQixPQUFULEdBQW1CO0FBQ2ZmLEVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQUFhLElBQWI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRyxRQUFOLEdBQWlCLEVBQWpCO0FBQ0FILEVBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLElBQWY7QUFDSDs7QUFFYyxTQUFVRixnQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNKLElBREk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFUSxpQkFBTSxtQkFBS0sscUJBQU1DLG9CQUFYLENBQU47O0FBRlI7QUFFRE8sVUFBQUEsTUFGQztBQUFBO0FBSVEsaUJBQU0sbUJBQUs7QUFDdEJJLFlBQUFBLElBQUksRUFBRSxtQkFBS2xCLHVCQUFMLEVBQThCYyxNQUE5QixDQURnQjtBQUV0QkssWUFBQUEsTUFBTSxFQUFFLG1CQUFLYixxQkFBTWMscUJBQVg7QUFGYyxXQUFMLENBQU47O0FBSlI7QUFJREMsVUFBQUEsTUFKQzs7QUFBQSxjQVNGQSxNQUFNLENBQUNGLE1BVEw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFVSCxpQkFBTSxtQkFBS2IscUJBQU1jLHFCQUFYLENBQU47O0FBVkc7QUFhUEgsVUFBQUEsT0FBTztBQWJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgc2VsZWN0LCB0YWtlRXZlcnksIGNhbGwsIHRha2UsIHJhY2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB0eXBlcyBmcm9tICcuLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyB0cmFuc2xhdGVTZWxlY3RvciB9IGZyb20gJy4uL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHN0b3JlOiBTdG9yZSA9IHtcbiAgICBsb2NhbGU6IG51bGwsXG4gICAgaW50bDogbnVsbCxcbiAgICBpbnRsRGF0YToge30sXG59O1xuXG5mdW5jdGlvbiogY3JlYXRlSW50bFByb3ZpZGVyKCkge1xuICAgIGlmICghc3RvcmUuaW50bERhdGEpIHtcbiAgICAgICAgeWllbGQgdGFrZSh0eXBlcy5DUkVBVEVfSU5UTF9QUk9WSURFUik7XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHlpZWxkIHNlbGVjdCh0cmFuc2xhdGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoc3RvcmUubG9jYWxlID09PSBsb2NhbGUgJiYgc3RvcmUuaW50bCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcmUubG9jYWxlID0gbG9jYWxlO1xuXG4gICAgY29uc3QgaW50bENvbmZpZyA9IHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBrZXk6IGxvY2FsZSxcbiAgICAgICAgbWVzc2FnZXM6IHN0b3JlLmludGxEYXRhW2xvY2FsZV0sXG4gICAgfTtcblxuICAgIGNvbnN0IHsgaW50bCB9ID0gbmV3IEludGxQcm92aWRlcihpbnRsQ29uZmlnKS5nZXRDaGlsZENvbnRleHQoKTtcblxuICAgIHN0b3JlLmludGwgPSBpbnRsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldEludGwoKSB7XG4gICAgaWYgKCFzdG9yZS5pbnRsKSB7XG4gICAgICAgIHlpZWxkIGNyZWF0ZUludGxQcm92aWRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZS5pbnRsO1xufVxuXG5mdW5jdGlvbiogaW5pdGlhbGl6ZWRJbnRsUHJvdmlkZXIoYWN0aW9uOiBBY3Rpb24pIHtcbiAgICBzdG9yZS5pbnRsRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmludGxEYXRhO1xuXG4gICAgeWllbGQgY2FsbChjcmVhdGVJbnRsUHJvdmlkZXIpO1xuXG4gICAgeWllbGQgdGFrZUV2ZXJ5KHR5cGVzLlNFVF9MT0NBTEUsIGNyZWF0ZUludGxQcm92aWRlcik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgc3RvcmUuaW50bCA9IG51bGw7XG4gICAgc3RvcmUuaW50bERhdGEgPSB7fTtcbiAgICBzdG9yZS5sb2NhbGUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogaW50bFByb3ZpZGVyRmxvdygpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB5aWVsZCB0YWtlKHR5cGVzLkNSRUFURV9JTlRMX1BST1ZJREVSKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByYWNlKHtcbiAgICAgICAgICAgIHRhc2s6IGNhbGwoaW5pdGlhbGl6ZWRJbnRsUHJvdmlkZXIsIGFjdGlvbiksXG4gICAgICAgICAgICBjYW5jZWw6IHRha2UodHlwZXMuREVTVFJPWV9JTlRMX1BST1ZJREVSKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQuY2FuY2VsKSB7XG4gICAgICAgICAgICB5aWVsZCB0YWtlKHR5cGVzLkRFU1RST1lfSU5UTF9QUk9WSURFUik7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhblVwKCk7XG4gICAgfVxufVxuIl19