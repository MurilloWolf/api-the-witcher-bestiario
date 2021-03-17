"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _MonsterController = _interopRequireDefault(require("./controllers/MonsterController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express.Router)();
routes.get('/', _MonsterController["default"].index);
routes.post('/', _MonsterController["default"].store);
routes.get('/backdoor', function (req, res) {
  res.json({
    ok: true
  });
});
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map