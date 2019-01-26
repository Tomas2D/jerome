"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;
Object.defineProperty(exports, "getIntl", {
  enumerable: true,
  get: function get() {
    return _intlProvider.getIntl;
  }
});

var _effects = require("redux-saga/effects");

var _intlProvider = _interopRequireWildcard(require("./intlProvider"));

var _storageHandlers = _interopRequireDefault(require("./storageHandlers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_callee);

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _intlProvider.default)(), (0, _storageHandlers.default)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zYWdhcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFJZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTSxrQkFBSSxDQUFDLDRCQUFELEVBQWlCLCtCQUFqQixDQUFKLENBQU47O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgaW50bFByb3ZpZGVyIGZyb20gJy4vaW50bFByb3ZpZGVyJztcbmltcG9ydCBzdG9yYWdlSGFuZGxlcnMgZnJvbSAnLi9zdG9yYWdlSGFuZGxlcnMnO1xuXG5leHBvcnQgeyBnZXRJbnRsIH0gZnJvbSAnLi9pbnRsUHJvdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gICAgeWllbGQgYWxsKFtpbnRsUHJvdmlkZXIoKSwgc3RvcmFnZUhhbmRsZXJzKCldKTtcbn1cbiJdfQ==