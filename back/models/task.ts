import { RowDataPacket, ResultSetHeader } from "mysql2";
import { Pool } from "mysql2/promise";
import { PostTaskRequestBody } from "../interfaces/taskInterfaces";

export default class TaskModel {
  constructor(private connection: Pool) {}

  async getAll() {
    const [ result ] = await this.connection.execute<RowDataPacket[]>(`SELECT * FROM Tasks ORDER BY description ASC`);

    return result as PostTaskRequestBody[];
  }

  async create(task: PostTaskRequestBody) {
    const [ result ] = await this.connection.execute<ResultSetHeader>(`INSERT INTO Tasks(description, status) VALUES(?, ?)`, [task.taskDescription, task.taskStatus]);

    return { id: result.insertId };
  }
}