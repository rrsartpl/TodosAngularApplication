import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TodosComponent } from './components/todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HelloComponent } from './components/hello/hello.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TodosComponent,
    HelloComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
