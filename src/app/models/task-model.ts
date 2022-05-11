import {TaskTypeEnum} from "./task-type-enum";
import { v4 as uuidv4 } from 'uuid';

export class TaskModel {
  id: string;
  title: string;
  type: TaskTypeEnum;

  constructor(opts?: Partial<TaskModel>) {
    opts = opts || {};
    this.id = opts.id || uuidv4();
    this.title = opts.title || '';
    this.type = opts.type || TaskTypeEnum.TODO;
  }
}
