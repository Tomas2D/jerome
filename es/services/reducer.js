function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import types from './actionTypes';
export default (function (locale) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      locale: locale
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case types.SET_LOCALE:
        return _objectSpread({}, state, {
          locale: action.locale
        });

      case types.GET_LOCALE:
        return _objectSpread({}, state, {
          locale: state.locale
        });

      default:
        return state;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbInR5cGVzIiwibG9jYWxlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX0xPQ0FMRSIsIkdFVF9MT0NBTEUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLGVBQWxCO0FBRUEsZ0JBQWUsVUFBQ0MsTUFBRDtBQUFBLFNBQW9CLFlBSzlCO0FBQUEsUUFKREMsS0FJQyx1RUFKb0I7QUFDakJELE1BQUFBLE1BQU0sRUFBTkE7QUFEaUIsS0FJcEI7QUFBQSxRQURERSxNQUNDOztBQUNELFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUtKLEtBQUssQ0FBQ0ssVUFBWDtBQUNJLGlDQUNPSCxLQURQO0FBRUlELFVBQUFBLE1BQU0sRUFBRUUsTUFBTSxDQUFDRjtBQUZuQjs7QUFJSixXQUFLRCxLQUFLLENBQUNNLFVBQVg7QUFDSSxpQ0FDT0osS0FEUDtBQUVJRCxVQUFBQSxNQUFNLEVBQUVDLEtBQUssQ0FBQ0Q7QUFGbEI7O0FBSUo7QUFDSSxlQUFPQyxLQUFQO0FBWlI7QUFjSCxHQXBCYztBQUFBLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGVTdGF0ZSwgQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAobG9jYWxlOiBzdHJpbmcpID0+IChcbiAgICBzdGF0ZTogTG9jYWxlU3RhdGUgPSB7XG4gICAgICAgIGxvY2FsZSxcbiAgICB9LFxuICAgIGFjdGlvbjogQWN0aW9uLFxuKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlNFVF9MT0NBTEU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogYWN0aW9uLmxvY2FsZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgdHlwZXMuR0VUX0xPQ0FMRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBzdGF0ZS5sb2NhbGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG4iXX0=