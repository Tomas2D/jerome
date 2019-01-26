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

import { select, takeEvery, call, take, race } from 'redux-saga/effects';
import { IntlProvider } from 'react-intl';
import types from '../actionTypes';
import { translateSelector } from '../selectors';
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
          return take(types.CREATE_INTL_PROVIDER);

        case 3:
          _context.next = 5;
          return select(translateSelector);

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
          _getChildContext = new IntlProvider(intlConfig).getChildContext(), intl = _getChildContext.intl;
          store.intl = intl;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

export function getIntl() {
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
          return call(createIntlProvider);

        case 3:
          _context3.next = 5;
          return takeEvery(types.SET_LOCALE, createIntlProvider);

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

export default function intlProviderFlow() {
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
          return take(types.CREATE_INTL_PROVIDER);

        case 3:
          action = _context4.sent;
          _context4.next = 6;
          return race({
            task: call(initializedIntlProvider, action),
            cancel: take(types.DESTROY_INTL_PROVIDER)
          });

        case 6:
          result = _context4.sent;

          if (result.cancel) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return take(types.DESTROY_INTL_PROVIDER);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9pbnRsUHJvdmlkZXIudHMiXSwibmFtZXMiOlsiY3JlYXRlSW50bFByb3ZpZGVyIiwiZ2V0SW50bCIsImluaXRpYWxpemVkSW50bFByb3ZpZGVyIiwiaW50bFByb3ZpZGVyRmxvdyIsInNlbGVjdCIsInRha2VFdmVyeSIsImNhbGwiLCJ0YWtlIiwicmFjZSIsIkludGxQcm92aWRlciIsInR5cGVzIiwidHJhbnNsYXRlU2VsZWN0b3IiLCJzdG9yZSIsImxvY2FsZSIsImludGwiLCJpbnRsRGF0YSIsIkNSRUFURV9JTlRMX1BST1ZJREVSIiwiaW50bENvbmZpZyIsImtleSIsIm1lc3NhZ2VzIiwiZ2V0Q2hpbGRDb250ZXh0IiwiYWN0aW9uIiwicGF5bG9hZCIsIlNFVF9MT0NBTEUiLCJjbGVhblVwIiwidGFzayIsImNhbmNlbCIsIkRFU1RST1lfSU5UTF9QUk9WSURFUiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7d0JBYVVBLGtCOzs7d0JBd0JPQyxPOzs7d0JBUVBDLHVCOzs7d0JBY2VDLGdCOztBQTFEekIsU0FBU0MsTUFBVCxFQUFpQkMsU0FBakIsRUFBNEJDLElBQTVCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsSUFBeEMsUUFBb0Qsb0JBQXBEO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixZQUE3QjtBQUVBLE9BQU9DLEtBQVAsTUFBa0IsZ0JBQWxCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsY0FBbEM7QUFFQSxJQUFNQyxLQUFZLEdBQUc7QUFDakJDLEVBQUFBLE1BQU0sRUFBRSxJQURTO0FBRWpCQyxFQUFBQSxJQUFJLEVBQUUsSUFGVztBQUdqQkMsRUFBQUEsUUFBUSxFQUFFO0FBSE8sQ0FBckI7O0FBTUEsU0FBVWYsa0JBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1NZLEtBQUssQ0FBQ0csUUFEZjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVRLGlCQUFNUixJQUFJLENBQUNHLEtBQUssQ0FBQ00sb0JBQVAsQ0FBVjs7QUFGUjtBQUFBO0FBS3VCLGlCQUFNWixNQUFNLENBQUNPLGlCQUFELENBQVo7O0FBTHZCO0FBQUE7QUFLWUUsVUFBQUEsTUFMWixRQUtZQSxNQUxaOztBQUFBLGdCQU9RRCxLQUFLLENBQUNDLE1BQU4sS0FBaUJBLE1BQWpCLElBQTJCRCxLQUFLLENBQUNFLElBUHpDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBV0lGLFVBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmO0FBRU1JLFVBQUFBLFVBYlYsR0FhdUI7QUFDZkosWUFBQUEsTUFBTSxFQUFOQSxNQURlO0FBRWZLLFlBQUFBLEdBQUcsRUFBRUwsTUFGVTtBQUdmTSxZQUFBQSxRQUFRLEVBQUVQLEtBQUssQ0FBQ0csUUFBTixDQUFlRixNQUFmO0FBSEssV0FidkI7QUFBQSw2QkFtQnFCLElBQUlKLFlBQUosQ0FBaUJRLFVBQWpCLEVBQTZCRyxlQUE3QixFQW5CckIsRUFtQllOLElBbkJaLG9CQW1CWUEsSUFuQlo7QUFxQklGLFVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQUFhQSxJQUFiOztBQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QkEsT0FBTyxTQUFVYixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNFVyxLQUFLLENBQUNFLElBRFI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQyxpQkFBTWQsa0JBQWtCLEVBQXhCOztBQUZEO0FBQUEsNENBS0lZLEtBQUssQ0FBQ0UsSUFMVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRUCxTQUFVWix1QkFBVixDQUFrQ21CLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSVQsVUFBQUEsS0FBSyxDQUFDRyxRQUFOLEdBQWlCTSxNQUFNLENBQUNDLE9BQVAsQ0FBZVAsUUFBaEM7QUFESjtBQUdJLGlCQUFNVCxJQUFJLENBQUNOLGtCQUFELENBQVY7O0FBSEo7QUFBQTtBQUtJLGlCQUFNSyxTQUFTLENBQUNLLEtBQUssQ0FBQ2EsVUFBUCxFQUFtQnZCLGtCQUFuQixDQUFmOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVN3QixPQUFULEdBQW1CO0FBQ2ZaLEVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQUFhLElBQWI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRyxRQUFOLEdBQWlCLEVBQWpCO0FBQ0FILEVBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLElBQWY7QUFDSDs7QUFFRCxlQUFlLFNBQVVWLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0osSUFESTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVRLGlCQUFNSSxJQUFJLENBQUNHLEtBQUssQ0FBQ00sb0JBQVAsQ0FBVjs7QUFGUjtBQUVESyxVQUFBQSxNQUZDO0FBQUE7QUFJUSxpQkFBTWIsSUFBSSxDQUFDO0FBQ3RCaUIsWUFBQUEsSUFBSSxFQUFFbkIsSUFBSSxDQUFDSix1QkFBRCxFQUEwQm1CLE1BQTFCLENBRFk7QUFFdEJLLFlBQUFBLE1BQU0sRUFBRW5CLElBQUksQ0FBQ0csS0FBSyxDQUFDaUIscUJBQVA7QUFGVSxXQUFELENBQVY7O0FBSlI7QUFJREMsVUFBQUEsTUFKQzs7QUFBQSxjQVNGQSxNQUFNLENBQUNGLE1BVEw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFVSCxpQkFBTW5CLElBQUksQ0FBQ0csS0FBSyxDQUFDaUIscUJBQVAsQ0FBVjs7QUFWRztBQWFQSCxVQUFBQSxPQUFPO0FBYkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBzZWxlY3QsIHRha2VFdmVyeSwgY2FsbCwgdGFrZSwgcmFjZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IHR5cGVzIGZyb20gJy4uL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IHRyYW5zbGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vc2VsZWN0b3JzJztcblxuY29uc3Qgc3RvcmU6IFN0b3JlID0ge1xuICAgIGxvY2FsZTogbnVsbCxcbiAgICBpbnRsOiBudWxsLFxuICAgIGludGxEYXRhOiB7fSxcbn07XG5cbmZ1bmN0aW9uKiBjcmVhdGVJbnRsUHJvdmlkZXIoKSB7XG4gICAgaWYgKCFzdG9yZS5pbnRsRGF0YSkge1xuICAgICAgICB5aWVsZCB0YWtlKHR5cGVzLkNSRUFURV9JTlRMX1BST1ZJREVSKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxvY2FsZSB9ID0geWllbGQgc2VsZWN0KHRyYW5zbGF0ZVNlbGVjdG9yKTtcblxuICAgIGlmIChzdG9yZS5sb2NhbGUgPT09IGxvY2FsZSAmJiBzdG9yZS5pbnRsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9yZS5sb2NhbGUgPSBsb2NhbGU7XG5cbiAgICBjb25zdCBpbnRsQ29uZmlnID0ge1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIGtleTogbG9jYWxlLFxuICAgICAgICBtZXNzYWdlczogc3RvcmUuaW50bERhdGFbbG9jYWxlXSxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBpbnRsIH0gPSBuZXcgSW50bFByb3ZpZGVyKGludGxDb25maWcpLmdldENoaWxkQ29udGV4dCgpO1xuXG4gICAgc3RvcmUuaW50bCA9IGludGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0SW50bCgpIHtcbiAgICBpZiAoIXN0b3JlLmludGwpIHtcbiAgICAgICAgeWllbGQgY3JlYXRlSW50bFByb3ZpZGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlLmludGw7XG59XG5cbmZ1bmN0aW9uKiBpbml0aWFsaXplZEludGxQcm92aWRlcihhY3Rpb246IEFjdGlvbikge1xuICAgIHN0b3JlLmludGxEYXRhID0gYWN0aW9uLnBheWxvYWQuaW50bERhdGE7XG5cbiAgICB5aWVsZCBjYWxsKGNyZWF0ZUludGxQcm92aWRlcik7XG5cbiAgICB5aWVsZCB0YWtlRXZlcnkodHlwZXMuU0VUX0xPQ0FMRSwgY3JlYXRlSW50bFByb3ZpZGVyKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICBzdG9yZS5pbnRsID0gbnVsbDtcbiAgICBzdG9yZS5pbnRsRGF0YSA9IHt9O1xuICAgIHN0b3JlLmxvY2FsZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBpbnRsUHJvdmlkZXJGbG93KCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHlpZWxkIHRha2UodHlwZXMuQ1JFQVRFX0lOVExfUFJPVklERVIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJhY2Uoe1xuICAgICAgICAgICAgdGFzazogY2FsbChpbml0aWFsaXplZEludGxQcm92aWRlciwgYWN0aW9uKSxcbiAgICAgICAgICAgIGNhbmNlbDogdGFrZSh0eXBlcy5ERVNUUk9ZX0lOVExfUFJPVklERVIpLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5jYW5jZWwpIHtcbiAgICAgICAgICAgIHlpZWxkIHRha2UodHlwZXMuREVTVFJPWV9JTlRMX1BST1ZJREVSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFuVXAoKTtcbiAgICB9XG59XG4iXX0=