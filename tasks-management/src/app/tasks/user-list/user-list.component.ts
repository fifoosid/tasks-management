import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserEntity } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<UserEntity>;
  selectedUser: UserEntity;
  @Output() userSelected = new EventEmitter<UserEntity>();

  constructor(private userService: UserService) {
    this.users = this.userService.generateSampleData();
  }

  ngOnInit() {
  }

  handleUserClick(user) {
    this.selectedUser = user;
    this.userSelected.emit(this.selectedUser);
  }
  
}
