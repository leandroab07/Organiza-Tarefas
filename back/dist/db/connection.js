"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var promise_1 = __importDefault(require("mysql2/promise"));
var config_1 = __importDefault(require("../config/config"));
exports["default"] = promise_1["default"].createPool(config_1["default"].db);
