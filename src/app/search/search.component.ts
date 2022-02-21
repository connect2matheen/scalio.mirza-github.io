import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  searchUser(searchKey:string): void {
    this.usersService.loginSearchKey.next(searchKey);
  }

  ngOnInit(): void {
  }

}
