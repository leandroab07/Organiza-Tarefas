"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var task_1 = __importDefault(require("./controllers/task"));
var error_1 = __importDefault(require("./middlewares/error"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var taskController = new task_1["default"]();
app.get('/tasks', taskController.getAll);
app.use(error_1["default"]);
exports["default"] = app;
