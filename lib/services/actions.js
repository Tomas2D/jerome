"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = setLocale;
exports.getLocale = getLocale;
exports.destroyIntlProvider = exports.createIntlProvider = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setLocale(locale) {
  return {
    type: _actionTypes.default.SET_LOCALE,
    locale: locale
  };
}

function getLocale() {
  return {
    type: _actionTypes.default.GET_LOCALE
  };
}

var createIntlProvider = function createIntlProvider() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _actionTypes.default.CREATE_INTL_PROVIDER,
    payload: payload
  };
};

exports.createIntlProvider = createIntlProvider;

var destroyIntlProvider = function destroyIntlProvider() {
  return {
    type: _actionTypes.default.DESTROY_INTL_PROVIDER
  };
};

exports.destroyIntlProvider = destroyIntlProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInNldExvY2FsZSIsImxvY2FsZSIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIlNFVF9MT0NBTEUiLCJnZXRMb2NhbGUiLCJHRVRfTE9DQUxFIiwiY3JlYXRlSW50bFByb3ZpZGVyIiwicGF5bG9hZCIsIkNSRUFURV9JTlRMX1BST1ZJREVSIiwiZGVzdHJveUludGxQcm92aWRlciIsIkRFU1RST1lfSU5UTF9QUk9WSURFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQztBQUM5QyxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRUMscUJBQVlDLFVBRGY7QUFFSEgsSUFBQUEsTUFBTSxFQUFOQTtBQUZHLEdBQVA7QUFJSDs7QUFFTSxTQUFTSSxTQUFULEdBQTZCO0FBQ2hDLFNBQU87QUFDSEgsSUFBQUEsSUFBSSxFQUFFQyxxQkFBWUc7QUFEZixHQUFQO0FBR0g7O0FBRU0sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUNDLE9BQUQsdUVBQVcsRUFBWDtBQUFBLFNBQTJCO0FBQ3pETixJQUFBQSxJQUFJLEVBQUVDLHFCQUFZTSxvQkFEdUM7QUFFekRELElBQUFBLE9BQU8sRUFBUEE7QUFGeUQsR0FBM0I7QUFBQSxDQUEzQjs7OztBQUtBLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFlO0FBQzlDUixJQUFBQSxJQUFJLEVBQUVDLHFCQUFZUTtBQUQ0QixHQUFmO0FBQUEsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUsIEFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGU6IExvY2FsZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0xPQ0FMRSxcbiAgICAgICAgbG9jYWxlLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfTE9DQUxFLFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnRsUHJvdmlkZXIgPSAocGF5bG9hZCA9IHt9KTogQWN0aW9uID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuQ1JFQVRFX0lOVExfUFJPVklERVIsXG4gICAgcGF5bG9hZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVzdHJveUludGxQcm92aWRlciA9ICgpOiBBY3Rpb24gPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5ERVNUUk9ZX0lOVExfUFJPVklERVIsXG59KTtcbiJdfQ==