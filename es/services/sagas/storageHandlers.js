"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;

var _effects = require("redux-saga/effects");

var _localforage = _interopRequireDefault(require("localforage"));

var _constants = require("../../constants");

var _config = require("../../config");

var _actions = require("../actions");

var _actionTypes = _interopRequireDefault(require("../actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(saveLocaleToLocalStorage),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(retrieveLocaleFromLocaleStorage),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(_callee);

function saveLocaleToLocalStorage(action) {
  return regeneratorRuntime.wrap(function saveLocaleToLocalStorage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _localforage.default.setItem(_constants.LOCALE_KEY, action.locale);

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);

          _config.logger.error(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 5]]);
}

function retrieveLocaleFromLocaleStorage() {
  var locale;
  return regeneratorRuntime.wrap(function retrieveLocaleFromLocaleStorage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _localforage.default.getItem(_constants.LOCALE_KEY);

        case 3:
          locale = _context2.sent;

          if (!locale) {
            _context2.next = 7;
            break;
          }

          _context2.next = 7;
          return (0, _effects.put)((0, _actions.setLocale)(locale));

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);

          _config.logger.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 9]]);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actionTypes.default.SET_LOCALE, saveLocaleToLocalStorage), retrieveLocaleFromLocaleStorage()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9zdG9yYWdlSGFuZGxlcnMudHMiXSwibmFtZXMiOlsic2F2ZUxvY2FsZVRvTG9jYWxTdG9yYWdlIiwicmV0cmlldmVMb2NhbGVGcm9tTG9jYWxlU3RvcmFnZSIsImFjdGlvbiIsImxvY2FsZm9yYWdlIiwic2V0SXRlbSIsIkxPQ0FMRV9LRVkiLCJsb2NhbGUiLCJsb2dnZXIiLCJlcnJvciIsImdldEl0ZW0iLCJ0eXBlcyIsIlNFVF9MT0NBTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O3dCQUVVQSx3Qjs7O3dCQVFBQywrQjs7Ozs7QUFSVixTQUFVRCx3QkFBVixDQUFtQ0UsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxpQkFBTUMscUJBQVlDLE9BQVosQ0FBb0JDLHFCQUFwQixFQUFnQ0gsTUFBTSxDQUFDSSxNQUF2QyxDQUFOOztBQUZSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBSVFDLHlCQUFPQyxLQUFQOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVVQLCtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1FLHFCQUFZTSxPQUFaLENBQW9CSixxQkFBcEIsQ0FBTjs7QUFGdkI7QUFFY0MsVUFBQUEsTUFGZDs7QUFBQSxlQUlZQSxNQUpaO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBS1ksaUJBQU0sa0JBQUksd0JBQVVBLE1BQVYsQ0FBSixDQUFOOztBQUxaO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBUVFDLHlCQUFPQyxLQUFQOztBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVllO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNLGtCQUFJLENBQUMsd0JBQVVFLHFCQUFNQyxVQUFoQixFQUE0Qlgsd0JBQTVCLENBQUQsRUFBd0RDLCtCQUErQixFQUF2RixDQUFKLENBQU47O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyB0YWtlRXZlcnksIGFsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5cbmltcG9ydCB7IExPQ0FMRV9LRVkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgc2V0TG9jYWxlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgdHlwZXMgZnJvbSAnLi4vYWN0aW9uVHlwZXMnO1xuXG5mdW5jdGlvbiogc2F2ZUxvY2FsZVRvTG9jYWxTdG9yYWdlKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgbG9jYWxmb3JhZ2Uuc2V0SXRlbShMT0NBTEVfS0VZLCBhY3Rpb24ubG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiByZXRyaWV2ZUxvY2FsZUZyb21Mb2NhbGVTdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IHlpZWxkIGxvY2FsZm9yYWdlLmdldEl0ZW0oTE9DQUxFX0tFWSk7XG5cbiAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgeWllbGQgcHV0KHNldExvY2FsZShsb2NhbGUpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KHR5cGVzLlNFVF9MT0NBTEUsIHNhdmVMb2NhbGVUb0xvY2FsU3RvcmFnZSksIHJldHJpZXZlTG9jYWxlRnJvbUxvY2FsZVN0b3JhZ2UoKV0pO1xufVxuIl19