var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_callee);

import { all } from 'redux-saga/effects';
import intlProvider from './intlProvider';
import storageHandlers from './storageHandlers';
export { getIntl } from './intlProvider';
export default function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return all([intlProvider(), storageHandlers()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhbGwiLCJpbnRsUHJvdmlkZXIiLCJzdG9yYWdlSGFuZGxlcnMiLCJnZXRJbnRsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixvQkFBcEI7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLGdCQUF6QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsbUJBQTVCO0FBRUEsU0FBU0MsT0FBVCxRQUF3QixnQkFBeEI7QUFFQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNSCxHQUFHLENBQUMsQ0FBQ0MsWUFBWSxFQUFiLEVBQWlCQyxlQUFlLEVBQWhDLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBpbnRsUHJvdmlkZXIgZnJvbSAnLi9pbnRsUHJvdmlkZXInO1xuaW1wb3J0IHN0b3JhZ2VIYW5kbGVycyBmcm9tICcuL3N0b3JhZ2VIYW5kbGVycyc7XG5cbmV4cG9ydCB7IGdldEludGwgfSBmcm9tICcuL2ludGxQcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgICB5aWVsZCBhbGwoW2ludGxQcm92aWRlcigpLCBzdG9yYWdlSGFuZGxlcnMoKV0pO1xufVxuIl19