import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { TasksMenuComponent } from './tasks/tasks-menu/tasks-menu.component';
import { UserListComponent } from './tasks/user-list/user-list.component';
import { TasksContentComponent } from './tasks/tasks-content/tasks-content.component';
import { TableComponent } from './common/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksMenuComponent,
    UserListComponent,
    TasksContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
