import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users/users.service';
import { UserInterface } from './user-interface';
// import { UserInterface } from './user-interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  p: number = 1;
  itemsPerP: number = 9;
  users: UserInterface[] = [];
  subscription?: Subscription;

  constructor(private usersService: UsersService) { }

  getUsers(searchKey: string): void {
    this.users = [];
    if (searchKey) {
      this.usersService.getUsers(searchKey).subscribe((users) => { this.users = users })
    }
  }

  ngOnInit(): void {
    this.subscription = this.usersService.loginSearchKey.subscribe((searchKey: string) => {
      this.getUsers(searchKey);
    })
  }

  ngDestroy() {
    this.subscription!.unsubscribe();
  }
  booleanValue: boolean = false;

  sortOrder() {
    if (this.booleanValue == true) {
      this.users.sort((a, b) => a['login'] < b['login'] ? 1 : a['login'] > b['login'] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
    else {
      this.users.sort((a, b) => a['login'] > b['login'] ? 1 : a['login'] < b['login'] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
  }

}

