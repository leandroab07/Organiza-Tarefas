"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http_status_codes_1 = require("http-status-codes");
var config_1 = __importDefault(require("./config/config"));
var task_1 = __importDefault(require("./controllers/task"));
var error_1 = __importDefault(require("./middlewares/error"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get('/', function (req, res) {
    res.status(http_status_codes_1.StatusCodes.OK).json('Iniciando projeto organiza-tarefas');
});
var taskController = new task_1["default"]();
app.get('/tasks', taskController.getAll);
app.post('/tasks', taskController.create);
app.use(error_1["default"]);
app.listen(config_1["default"].app.port, function () {
    console.log("Ouvindo na porta: ".concat(config_1["default"].app.port));
});
