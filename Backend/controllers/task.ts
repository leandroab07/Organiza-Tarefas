import { Request, Response, NextFunction} from "express";
import { PostTaskRequestBody } from "../interfaces/taskInterfaces";
import TaskService from '../services/task'

export default class TaskController {
  constructor(private taskService = new TaskService()) {}

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // const task = req.body as PostTaskRequestBody;

      const list = await this.taskService.getAll();

      res.status(201).json(list)

      // await createTask
    } catch (e) {
      next(e);
    }
  }
}