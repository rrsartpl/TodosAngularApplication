import {Component} from '@angular/core';
import {TaskListModel} from "./models/task-list-model";
import {TaskModel} from "./models/task-model";
import {TaskTypeEnum} from "./models/task-type-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos Application with Angular';

  data: TaskListModel[] = [
    new TaskListModel({
      title: 'TODO',
      tasks: [
        new TaskModel({title: 'zadanie todo 1'}),
        new TaskModel({title: 'zadanie todo 2'}),
      ],
      type: TaskTypeEnum.TODO,
    }),
    new TaskListModel({
      title: 'IN PROGRESS',
      tasks: [
        new TaskModel({title: 'zadanie in progress 1'}),
      ],
      type: TaskTypeEnum.IN_PROGRESS
    }),
    new TaskListModel({
      title: 'DONE',
      tasks: [
        new TaskModel({title: 'zadanie done 1'}),
      ],
      type: TaskTypeEnum.DONE
    }),
  ]
}
