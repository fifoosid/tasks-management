import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserEntity } from 'src/app/interfaces/user';

@Component({
  selector: 'tasks-content',
  templateUrl: './tasks-content.component.html',
  styleUrls: ['./tasks-content.component.css']
})
export class TasksContentComponent implements OnInit, OnChanges {
  @Input() user: UserEntity;
  date: String;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.user) {
      const date = new Date(this.user.created);
      this.date = date.toString().substring(0, date.toString().indexOf("GMT"));
    }
  }

}
