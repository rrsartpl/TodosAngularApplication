import {TaskTypeEnum} from "./task-type-enum";

export class TaskModel {
  title: string;
  type: TaskTypeEnum;

  constructor(opts: Partial<TaskModel>) {
    opts = opts || {};
    this.title = opts.title || '';
    this.type = opts.type || TaskTypeEnum.TODO;
  }
}
