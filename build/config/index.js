"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbCollection = exports.dbUserName = exports.dbPassword = exports.port = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.PORT;
exports.port = port;
var dbPassword = process.env.DB_PASSWORD;
exports.dbPassword = dbPassword;
var dbUserName = process.env.DB_USERNAME;
exports.dbUserName = dbUserName;
var dbCollection = process.env.DB_COLLECTION;
exports.dbCollection = dbCollection;
//# sourceMappingURL=index.js.map