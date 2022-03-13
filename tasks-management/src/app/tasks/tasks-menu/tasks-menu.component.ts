import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserEntity } from 'src/app/interfaces/user';

@Component({
  selector: 'tasks-menu',
  templateUrl: './tasks-menu.component.html',
  styleUrls: ['./tasks-menu.component.css']
})
export class TasksMenuComponent implements OnInit {
  @Output() userSelected = new EventEmitter<UserEntity>();

  constructor() { }

  ngOnInit() {
  }

  handleUserSelection(event) {
    this.userSelected.emit(event);
  }
}
