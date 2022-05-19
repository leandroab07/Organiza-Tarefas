import { PostTaskRequestBody } from '../interfaces/taskInterfaces'

export default class taskService {
  constructor() {}

  create(task: PostTaskRequestBody) {
    createTask(task);
  }
}