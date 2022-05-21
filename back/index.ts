import express from 'express';
import { StatusCodes } from 'http-status-codes';
import config from './config/config';
import TaskController from './controllers/task';
import connection from './db/connection';
import error from './middlewares/error';
import TaskModel from './models/task';
import TaskService from './services/task';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json('Iniciando projeto organiza-tarefas')
});

const taskController = new TaskController();

app.get('/tasks', taskController.getAll)
app.post('/tasks', taskController.create)

app.use(error);

app.listen(config.app.port, () => {
  console.log(`Ouvindo na porta: ${config.app.port}`);
});