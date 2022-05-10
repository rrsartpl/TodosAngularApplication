import {Component, Input, OnInit} from '@angular/core';
import {TaskListModel} from "../../models/task-list-model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() listOfTaskList: TaskListModel[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
