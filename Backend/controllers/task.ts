import { Request, Response, NextFunction} from "express";
import { PostTaskRequestBody } from "../interfaces/taskInterfaces";

export default class TaskController {
  constructor() {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const task = req.body as PostTaskRequestBody;

      // await createTask
    } catch (e) {
      next(e);
    }
  }
}