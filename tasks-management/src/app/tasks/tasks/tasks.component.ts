import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/interfaces/user';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  currentUser: UserEntity;

  constructor() { }

  ngOnInit() {
  }

  handleUserSelection(event) {
    this.currentUser = event;
  }
}
