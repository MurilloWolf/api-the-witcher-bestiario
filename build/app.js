"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.server = (0, _express["default"])();
    this.applyMidleware();
    this.connectDB();
  }

  _createClass(App, [{
    key: "applyMidleware",
    value: function applyMidleware() {
      this.server.use((0, _cors["default"])());
      this.server.use(_express["default"].json());
      this.useRoutes();
    }
  }, {
    key: "useRoutes",
    value: function useRoutes() {
      this.server.use(_routes["default"]);
    }
  }, {
    key: "connectDB",
    value: function () {
      var _connectDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var uri, connected;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                uri = "mongodb+srv://".concat(_config.dbUserName, ":").concat(_config.dbPassword, "@thewitcherbestiario.1087j.mongodb.net/").concat(_config.dbCollection, "?retryWrites=true&w=majority");
                _context.next = 4;
                return _mongoose["default"].connect(uri, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                });

              case 4:
                connected = _context.sent;
                connected ? console.log('Conectado com o banco ') : console.log('Erro ao conectar ');
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function connectDB() {
        return _connectDB.apply(this, arguments);
      }

      return connectDB;
    }()
  }]);

  return App;
}();

var _default = new App().server;
exports["default"] = _default;
//# sourceMappingURL=app.js.map