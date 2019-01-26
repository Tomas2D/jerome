var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(saveLocaleToLocalStorage),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(retrieveLocaleFromLocaleStorage),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(_callee);

import { takeEvery, all, put } from 'redux-saga/effects';
import localforage from 'localforage';
import { LOCALE_KEY } from '../../constants';
import { logger } from '../../config';
import { setLocale } from '../actions';
import types from '../actionTypes';

function saveLocaleToLocalStorage(action) {
  return regeneratorRuntime.wrap(function saveLocaleToLocalStorage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return localforage.setItem(LOCALE_KEY, action.locale);

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          logger.error(_context.t0);

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
          return localforage.getItem(LOCALE_KEY);

        case 3:
          locale = _context2.sent;

          if (!locale) {
            _context2.next = 7;
            break;
          }

          _context2.next = 7;
          return put(setLocale(locale));

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          logger.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 9]]);
}

export default function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return all([takeEvery(types.SET_LOCALE, saveLocaleToLocalStorage), retrieveLocaleFromLocaleStorage()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9zdG9yYWdlSGFuZGxlcnMudHMiXSwibmFtZXMiOlsic2F2ZUxvY2FsZVRvTG9jYWxTdG9yYWdlIiwicmV0cmlldmVMb2NhbGVGcm9tTG9jYWxlU3RvcmFnZSIsInRha2VFdmVyeSIsImFsbCIsInB1dCIsImxvY2FsZm9yYWdlIiwiTE9DQUxFX0tFWSIsImxvZ2dlciIsInNldExvY2FsZSIsInR5cGVzIiwiYWN0aW9uIiwic2V0SXRlbSIsImxvY2FsZSIsImVycm9yIiwiZ2V0SXRlbSIsIlNFVF9MT0NBTEUiXSwibWFwcGluZ3MiOiI7O3dCQVVVQSx3Qjs7O3dCQVFBQywrQjs7Ozs7QUFqQlYsU0FBU0MsU0FBVCxFQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLFFBQW9DLG9CQUFwQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IsYUFBeEI7QUFFQSxTQUFTQyxVQUFULFFBQTJCLGlCQUEzQjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsY0FBdkI7QUFFQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixnQkFBbEI7O0FBRUEsU0FBVVQsd0JBQVYsQ0FBbUNVLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVEsaUJBQU1MLFdBQVcsQ0FBQ00sT0FBWixDQUFvQkwsVUFBcEIsRUFBZ0NJLE1BQU0sQ0FBQ0UsTUFBdkMsQ0FBTjs7QUFGUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSVFMLFVBQUFBLE1BQU0sQ0FBQ00sS0FBUDs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxTQUFVWiwrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXVCLGlCQUFNSSxXQUFXLENBQUNTLE9BQVosQ0FBb0JSLFVBQXBCLENBQU47O0FBRnZCO0FBRWNNLFVBQUFBLE1BRmQ7O0FBQUEsZUFJWUEsTUFKWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUtZLGlCQUFNUixHQUFHLENBQUNJLFNBQVMsQ0FBQ0ksTUFBRCxDQUFWLENBQVQ7O0FBTFo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFRTCxVQUFBQSxNQUFNLENBQUNNLEtBQVA7O0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWUEsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTVYsR0FBRyxDQUFDLENBQUNELFNBQVMsQ0FBQ08sS0FBSyxDQUFDTSxVQUFQLEVBQW1CZix3QkFBbkIsQ0FBVixFQUF3REMsK0JBQStCLEVBQXZGLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHRha2VFdmVyeSwgYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuaW1wb3J0IHsgTE9DQUxFX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBzZXRMb2NhbGUgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB0eXBlcyBmcm9tICcuLi9hY3Rpb25UeXBlcyc7XG5cbmZ1bmN0aW9uKiBzYXZlTG9jYWxlVG9Mb2NhbFN0b3JhZ2UoYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBsb2NhbGZvcmFnZS5zZXRJdGVtKExPQ0FMRV9LRVksIGFjdGlvbi5sb2NhbGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHJldHJpZXZlTG9jYWxlRnJvbUxvY2FsZVN0b3JhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0geWllbGQgbG9jYWxmb3JhZ2UuZ2V0SXRlbShMT0NBTEVfS0VZKTtcblxuICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoc2V0TG9jYWxlKGxvY2FsZSkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZXJyb3IoZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkodHlwZXMuU0VUX0xPQ0FMRSwgc2F2ZUxvY2FsZVRvTG9jYWxTdG9yYWdlKSwgcmV0cmlldmVMb2NhbGVGcm9tTG9jYWxlU3RvcmFnZSgpXSk7XG59XG4iXX0=