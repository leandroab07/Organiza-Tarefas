import { PostTaskRequestBody } from '../interfaces/taskInterfaces'
import connection from '../db/connection';
import TaskModel from '../models/task';

export default class taskService {
  constructor(private taskModel = new TaskModel(connection)) {}

  async getAll(): Promise<PostTaskRequestBody[]> {
    const result = await this.taskModel.getAll();

    return result;
  }

  async create(task: PostTaskRequestBody) {
    const result = await this.taskModel.create(task);
    console.log('AQUIIIIIIII >>>>>>', task)

    return result;
  }
}