"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(locale) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      locale: locale
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _actionTypes.default.SET_LOCALE:
        return _objectSpread({}, state, {
          locale: action.locale
        });

      case _actionTypes.default.GET_LOCALE:
        return _objectSpread({}, state, {
          locale: state.locale
        });

      default:
        return state;
    }
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImxvY2FsZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwiU0VUX0xPQ0FMRSIsIkdFVF9MT0NBTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7ZUFFZSxrQkFBQ0EsTUFBRDtBQUFBLFNBQW9CLFlBSzlCO0FBQUEsUUFKREMsS0FJQyx1RUFKb0I7QUFDakJELE1BQUFBLE1BQU0sRUFBTkE7QUFEaUIsS0FJcEI7QUFBQSxRQURERSxNQUNDOztBQUNELFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUtDLHFCQUFNQyxVQUFYO0FBQ0ksaUNBQ09KLEtBRFA7QUFFSUQsVUFBQUEsTUFBTSxFQUFFRSxNQUFNLENBQUNGO0FBRm5COztBQUlKLFdBQUtJLHFCQUFNRSxVQUFYO0FBQ0ksaUNBQ09MLEtBRFA7QUFFSUQsVUFBQUEsTUFBTSxFQUFFQyxLQUFLLENBQUNEO0FBRmxCOztBQUlKO0FBQ0ksZUFBT0MsS0FBUDtBQVpSO0FBY0gsR0FwQmM7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlU3RhdGUsIEFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKGxvY2FsZTogc3RyaW5nKSA9PiAoXG4gICAgc3RhdGU6IExvY2FsZVN0YXRlID0ge1xuICAgICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICBhY3Rpb246IEFjdGlvbixcbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5TRVRfTE9DQUxFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGFjdGlvbi5sb2NhbGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHR5cGVzLkdFVF9MT0NBTEU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogc3RhdGUubG9jYWxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuIl19