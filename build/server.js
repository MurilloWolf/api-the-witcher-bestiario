"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(process.env.PORT);

console.log("Server started in http://localhost:".concat(process.env.PORT, "/"));
//# sourceMappingURL=server.js.map