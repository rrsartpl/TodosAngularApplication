import {Component} from '@angular/core';
import {TaskListModel} from "./models/task-list-model";
import {DataService} from "./services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos Application with Angular';

  // data: TaskListModel[] = [];
  data$: Observable<TaskListModel[]> | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data$ = this.dataService.getData();
    this.dataService.loadData();
    // this.dataService.getData().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
