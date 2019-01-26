import actionTypes from './actionTypes';
export function setLocale(locale) {
  return {
    type: actionTypes.SET_LOCALE,
    locale: locale
  };
}
export function getLocale() {
  return {
    type: actionTypes.GET_LOCALE
  };
}
export var createIntlProvider = function createIntlProvider() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: actionTypes.CREATE_INTL_PROVIDER,
    payload: payload
  };
};
export var destroyIntlProvider = function destroyIntlProvider() {
  return {
    type: actionTypes.DESTROY_INTL_PROVIDER
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwic2V0TG9jYWxlIiwibG9jYWxlIiwidHlwZSIsIlNFVF9MT0NBTEUiLCJnZXRMb2NhbGUiLCJHRVRfTE9DQUxFIiwiY3JlYXRlSW50bFByb3ZpZGVyIiwicGF5bG9hZCIsIkNSRUFURV9JTlRMX1BST1ZJREVSIiwiZGVzdHJveUludGxQcm92aWRlciIsIkRFU1RST1lfSU5UTF9QUk9WSURFUiJdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBT0EsV0FBUCxNQUF3QixlQUF4QjtBQUVBLE9BQU8sU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkM7QUFDOUMsU0FBTztBQUNIQyxJQUFBQSxJQUFJLEVBQUVILFdBQVcsQ0FBQ0ksVUFEZjtBQUVIRixJQUFBQSxNQUFNLEVBQU5BO0FBRkcsR0FBUDtBQUlIO0FBRUQsT0FBTyxTQUFTRyxTQUFULEdBQTZCO0FBQ2hDLFNBQU87QUFDSEYsSUFBQUEsSUFBSSxFQUFFSCxXQUFXLENBQUNNO0FBRGYsR0FBUDtBQUdIO0FBRUQsT0FBTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBQ0MsT0FBRCx1RUFBVyxFQUFYO0FBQUEsU0FBMkI7QUFDekRMLElBQUFBLElBQUksRUFBRUgsV0FBVyxDQUFDUyxvQkFEdUM7QUFFekRELElBQUFBLE9BQU8sRUFBUEE7QUFGeUQsR0FBM0I7QUFBQSxDQUEzQjtBQUtQLE9BQU8sSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQWU7QUFDOUNQLElBQUFBLElBQUksRUFBRUgsV0FBVyxDQUFDVztBQUQ0QixHQUFmO0FBQUEsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUsIEFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGU6IExvY2FsZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0xPQ0FMRSxcbiAgICAgICAgbG9jYWxlLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfTE9DQUxFLFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnRsUHJvdmlkZXIgPSAocGF5bG9hZCA9IHt9KTogQWN0aW9uID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuQ1JFQVRFX0lOVExfUFJPVklERVIsXG4gICAgcGF5bG9hZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVzdHJveUludGxQcm92aWRlciA9ICgpOiBBY3Rpb24gPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5ERVNUUk9ZX0lOVExfUFJPVklERVIsXG59KTtcbiJdfQ==