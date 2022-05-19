import express from 'express';
import TaskController from './controllers/task';
import connection from './db/connection';
import error from './middlewares/error';
import TaskModel from './models/task';
import TaskService from './services/task';

const app = express();

app.use(express.json());

const taskController = new TaskController();

app.get('/tasks', taskController.getAll)

app.use(error);

export default app;