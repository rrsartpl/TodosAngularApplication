import {Injectable} from '@angular/core';
import {TaskListModel} from "../models/task-list-model";
import {TaskModel} from "../models/task-model";
import {TaskTypeEnum} from "../models/task-type-enum";
import {catchError, Observable, of, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data$ = new Subject<TaskListModel[]>();

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<TaskListModel[]> {
    return this.data$.asObservable();
  }

  loadData() {
    this.httpClient
      .get<TaskModel[]>('./assets/data.json')
      .pipe(
        tap((data) => console.log(data)),
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      )
      .subscribe((data) => {
        const todoList = new TaskListModel({
          title: 'TODO',
          tasks: data
            .filter((task: TaskModel) => task.type === TaskTypeEnum.TODO)
            .map((task) => new TaskModel(task)),
          type: TaskTypeEnum.TODO
        });
        const inProgressList = new TaskListModel({
          title: 'IN PROGRESS',
          tasks: data
            .filter((task: TaskModel) => task.type === TaskTypeEnum.IN_PROGRESS)
            .map((task) => new TaskModel(task)),
          type: TaskTypeEnum.IN_PROGRESS
        });
        const doneList = new TaskListModel({
          title: 'DONE',
          tasks: data
            .filter((task: TaskModel) => task.type === TaskTypeEnum.DONE)
            .map((task) => new TaskModel(task)),
          type: TaskTypeEnum.DONE
        });
        this.data$.next([
          todoList,
          inProgressList,
          doneList,
        ])
      });
  }
}
